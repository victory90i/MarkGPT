import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { colors, fonts, spacing } from '../../theme/index';
import { useVoiceRecorder } from '../../hooks/useVoiceRecorder';
import AIService from '../../services/ai/AIServices';
import Input from '../../components/Input';

const AssistantScreen = () => {
  const { isRecording, startRecording, stopRecording, results } = useVoiceRecorder();
  const [messages, setMessages] = useState([
    { id: 1, text: "How I fit help you today? (How can I help you?)", sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState('');

  // Effect to process voice results
  useEffect(() => {
    if (results.length > 0 && isRecording) {
      // Automatically take the first result after a delay
      handleSendMessage(results[0]);
      stopRecording();
    }
  }, [results]);

  const handleSendMessage = async (text) => {
    const msgText = text || inputText;
    if (!msgText.trim()) return;

    // Add User Message
    const userMsg = { id: Date.now(), text: msgText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Process with AI
    const aiResponse = await AIService.processCommand(msgText);

    // Add AI Message (Pidgin preferred)
    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        text: aiResponse.pidginResponse,
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>StaySafe Assistant</Text>
        <Text style={styles.headerSubtitle}>Pidgin & English</Text>
      </View>

      <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageBubble,
              msg.sender === 'user' ? styles.userBubble : styles.aiBubble
            ]}
          >
            <Text style={[
              styles.messageText,
              msg.sender === 'user' ? styles.userText : styles.aiText
            ]}>
              {msg.text}
            </Text>
          </View>
        ))}
        {isRecording && (
          <Text style={styles.recordingIndicator}>Listening... (Say "Help")</Text>
        )}
      </ScrollView>

      <View style={styles.inputArea}>
        <Input
          groupStyle={{ flex: 1 }}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type or use voice..."
        />
        <TouchableOpacity
          style={[styles.micButton, isRecording && styles.micActive]}
          onPress={isRecording ? stopRecording : startRecording}
        >
          {/* In real app, use an Icon here */}
          <Text style={styles.micText}>{isRecording ? 'STOP' : 'MIC'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => handleSendMessage()}
        >
          <Text style={styles.sendText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.m,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    elevation: 2,
  },
  headerTitle: {
    fontFamily: fonts.primary.bold,
    fontSize: fonts.size.title,
    color: colors.primary,
  },
  headerSubtitle: {
    fontFamily: fonts.secondary.regular,
    fontSize: fonts.size.small,
    color: colors.gray,
  },
  chatContainer: {
    flex: 1,
    padding: spacing.m,
  },
  chatContent: {
    paddingBottom: spacing.xxl,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: spacing.m,
    borderRadius: 16,
    marginBottom: spacing.m,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  messageText: {
    fontFamily: fonts.secondary.regular,
    fontSize: fonts.size.body,
  },
  userText: {
    color: colors.white,
  },
  aiText: {
    color: colors.text,
  },
  recordingIndicator: {
    alignSelf: 'center',
    color: colors.accent,
    fontStyle: 'italic',
    marginTop: spacing.s,
  },
  inputArea: {
    flexDirection: 'row',
    padding: spacing.s,
    backgroundColor: colors.white,
    alignItems: 'center', // Align center vertically
  },
  micButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: spacing.s,
    marginBottom: spacing.m, // Align with Input margin
  },
  micActive: {
    backgroundColor: colors.danger,
  },
  micText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  sendButton: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.m,
    marginBottom: spacing.m,
  },
  sendText: {
    color: colors.primary,
    fontFamily: fonts.primary.bold,
  },
});

export default AssistantScreen;