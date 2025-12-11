import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts, spacing } from '../theme';

const SafetyBanner = ({ message, type = 'danger', onPress }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'danger': return colors.danger;
      case 'warning': return '#FF9800'; // Orange
      case 'info': return colors.accent;
      default: return colors.danger;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
        <View style={styles.pulseIndicator} />
        <View style={styles.content}>
          <Text style={styles.title}>LIVE ALERT</Text>
          <Text style={styles.message} numberOfLines={2}>{message}</Text>
        </View>
        <Text style={styles.time}>Just now</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.m,
    margin: spacing.m,
    borderRadius: 12,
    elevation: 4,
    shadowColor: colors.danger,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  pulseIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: spacing.m,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 10,
    color: colors.white,
    opacity: 0.9,
    letterSpacing: 1,
  },
  message: {
    fontFamily: fonts.primary.medium,
    fontSize: fonts.size.body,
    color: colors.white,
  },
  time: {
    fontFamily: fonts.secondary.regular,
    fontSize: 10,
    color: colors.white,
    opacity: 0.8,
    alignSelf: 'flex-start',
  },
});

export default SafetyBanner;