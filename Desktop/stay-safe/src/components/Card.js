import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

const Card = ({ children, style, variant = 'default' }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.m,
    marginVertical: spacing.s,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 3,
  },
});

export default Card;