import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Vibration, Alert } from 'react-native';
import { colors, fonts, spacing } from '../../theme';
import Button from '../../components/Button';

const SOSScreen = () => {
  const [isPressing, setIsPressing] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isActive, setIsActive] = useState(false);

  // Animation for the button scale
  const scaleValue = useRef(new Animated.Value(1)).current;
  const timerRef = useRef(null);

  const startSOS = () => {
    setIsPressing(true);
    Animated.timing(scaleValue, {
      toValue: 1.2,
      duration: 3000, // 3 seconds to activate
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        triggerEmergency();
      }
    });
  };

  const cancelSOS = () => {
    setIsPressing(false);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const triggerEmergency = () => {
    setIsPressing(false);
    setIsActive(true);
    Vibration.vibrate([1000, 1000, 1000]); // Vibrate pattern

    // Simulate sending data or SMS
    Alert.alert(
      "EMERGENCY ACTIVATED",
      "Sending location to emergency contacts and nearby users.",
      [{ text: "OK" }]
    );
  };

  const resetEmergency = () => {
    setIsActive(false);
    setCountdown(5); // Reset countdown for next time if we were using it for auto-trigger
  };

  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
      <Text style={[styles.title, isActive && styles.activeText]}>
        {isActive ? 'HELP IS ON THE WAY' : 'HOLD FOR 3 SECONDS'}
      </Text>

      {!isActive ? (
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={startSOS}
          onPressOut={cancelSOS}
          style={styles.buttonWrapper}
        >
          <Animated.View style={[styles.sosButton, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.sosText}>SOS</Text>
          </Animated.View>
        </TouchableOpacity>
      ) : (
        <View style={styles.activeContent}>
          <Text style={styles.infoText}>
            Location Sent: 3.8480, 11.5021{"\n"}
            Contacts Notified: 3{"\n"}
            Mode: Offline SMS (Simulated)
          </Text>
          <Button
            title="I AM SAFE NOW"
            variant="outline"
            style={{ borderColor: 'white', marginTop: 50 }}
            onPress={resetEmergency}
          />
        </View>
      )}

      {!isActive && (
        <Text style={styles.subtitle}>
          Press and hold to send an emergency alert to your contacts and community.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.l,
  },
  activeContainer: {
    backgroundColor: colors.danger,
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: fonts.size.title,
    color: colors.danger,
    marginBottom: spacing.xl * 2,
    textAlign: 'center',
    letterSpacing: 2,
  },
  activeText: {
    color: 'white',
  },
  buttonWrapper: {
    marginBottom: spacing.xl,
  },
  sosButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: colors.danger,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  sosText: {
    fontFamily: fonts.primary.bold,
    fontSize: 48,
    color: 'white',
  },
  subtitle: {
    fontFamily: fonts.secondary.regular,
    fontSize: fonts.size.body,
    color: colors.gray,
    textAlign: 'center',
    marginTop: spacing.xl,
    maxWidth: '80%',
  },
  activeContent: {
    alignItems: 'center',
  },
  infoText: {
    fontFamily: fonts.secondary.medium,
    fontSize: fonts.size.subtitle,
    color: 'white',
    textAlign: 'center',
    lineHeight: 28,
  },
});

export default SOSScreen;