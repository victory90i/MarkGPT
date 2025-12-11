import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/index';

const PlaceholderScreen = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name} Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export const LoginScreen = () => <PlaceholderScreen name="Login" />;
export const RegisterScreen = () => <PlaceholderScreen name="Register" />;
export const HomeScreen = () => <PlaceholderScreen name="Home" />;
export const MapScreen = () => <PlaceholderScreen name="Map" />;
export const AlertsScreen = () => <PlaceholderScreen name="Alerts" />;
export const AssistantScreen = () => <PlaceholderScreen name="Assistant" />;
export const ProfileScreen = () => <PlaceholderScreen name="Profile" />;
export const SOSScreen = () => <PlaceholderScreen name="SOS" />;
export const SplashScreen = () => <PlaceholderScreen name="Splash" />;