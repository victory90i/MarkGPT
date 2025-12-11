import { useState, useEffect } from 'react';
// import Voice from 'react-native-voice'; // Uncomment for real device
// import Tts from 'react-native-tts';

export const useVoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [results, setResults] = useState([]);

  const startRecording = async () => {
    setIsRecording(true);
    setResults([]);
    // Mocking voice start
    console.log("Starting voice recording...");

    // Simulate getting results after a delay
    setTimeout(() => {
      setResults(['Help me', 'I dey for danger', 'Report accident']);
    }, 2000);
  };

  const stopRecording = async () => {
    setIsRecording(false);
    console.log("Stopped voice recording");
  };

  const cancelRecording = async () => {
    setIsRecording(false);
    setResults([]);
  };

  return {
    isRecording,
    results,
    startRecording,
    stopRecording,
    cancelRecording,
  };
};