import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors, fonts, spacing } from '../../theme';
import SafetyBanner from '../../components/SafetyBanner';

const ALERTS_DATA = [
  { id: '1', type: 'danger', message: 'Heavy gunfire reported near Commercial Avenue.', time: '2 mins ago' },
  { id: '2', type: 'warning', message: 'Roadblock setup at Mile 4 junction.', time: '15 mins ago' },
  { id: '3', type: 'info', message: 'Curfew starts at 6PM today.', time: '1 hour ago' },
  { id: '4', type: 'danger', message: 'Car accident on main highway. Traffic blocked.', time: '2 hours ago' },
];

const AlertsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Alerts</Text>
      </View>
      <FlatList
        data={ALERTS_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SafetyBanner
            type={item.type}
            message={item.message}
            onPress={() => { }}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
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
    paddingTop: spacing.l,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  headerTitle: {
    fontFamily: fonts.primary.bold,
    fontSize: fonts.size.title,
    color: colors.text,
  },
  listContent: {
    paddingBottom: spacing.l,
  },
});

export default AlertsScreen;