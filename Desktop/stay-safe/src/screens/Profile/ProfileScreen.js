import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { colors, fonts, spacing } from '../../theme';
import { useUser } from '../../context/UserContext';
import Button from '../../components/Button';
import Card from '../../components/Card';

const ProfileScreen = () => {
  const { user, upgradeToPremium, downgradeToFree } = useUser();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{user.name[0]}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.planStatus}>
          Current Plan: <Text style={{ fontWeight: 'bold', color: user.isPremium ? colors.success : colors.gray }}>
            {user.isPremium ? 'PREMIUM PROTECT' : 'FREE BASIC'}
          </Text>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subscription</Text>
        <Card>
          {user.isPremium ? (
            <View>
              <Text style={styles.cardTitle}>You are covered!</Text>
              <Text style={styles.cardBody}>
                You have access to Live Tracking, Crisis Team Support, and unlimited Offline Alerts.
              </Text>
              <Button
                title="Manage Subscription"
                variant="outline"
                onPress={downgradeToFree}
                style={{ marginTop: spacing.m }}
              />
            </View>
          ) : (
            <View>
              <Text style={styles.cardTitle}>Upgrade to Premium</Text>
              <Text style={styles.cardBody}>
                Get real-time family tracking, 24/7 crisis response using AI, and no ads.
              </Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>2,500 FCFA</Text>
                <Text style={styles.period}>/month</Text>
              </View>
              <Button
                title="Subscribe Now"
                variant="primary"
                onPress={upgradeToPremium}
              />
            </View>
          )}
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        <Card>
          <View style={styles.contactRow}>
            <Text style={styles.contactName}>Mom</Text>
            <Text style={styles.contactPhone}>+237 677 00 00 00</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.contactRow}>
            <Text style={styles.contactName}>Brother</Text>
            <Text style={styles.contactPhone}>+237 650 11 11 11</Text>
          </View>
          <Button title="+ Add Contact" variant="outline" style={{ marginTop: spacing.m }} />
        </Card>
      </View>

      <Button
        title="Log Out"
        variant="danger"
        style={{ margin: spacing.m, marginBottom: spacing.xl }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  avatarText: {
    fontFamily: fonts.primary.bold,
    fontSize: 32,
    color: 'white',
  },
  name: {
    fontFamily: fonts.primary.bold,
    fontSize: fonts.size.title,
    color: colors.text,
  },
  planStatus: {
    fontFamily: fonts.secondary.medium,
    fontSize: fonts.size.body,
    color: colors.gray,
    marginTop: spacing.xs,
  },
  section: {
    padding: spacing.m,
  },
  sectionTitle: {
    fontFamily: fonts.secondary.bold,
    fontSize: fonts.size.subtitle,
    color: colors.secondary,
    marginBottom: spacing.s,
    marginLeft: spacing.xs,
  },
  cardTitle: {
    fontFamily: fonts.primary.bold,
    fontSize: fonts.size.subtitle,
    color: colors.primary,
    marginBottom: spacing.s,
  },
  cardBody: {
    fontFamily: fonts.secondary.regular,
    fontSize: fonts.size.body,
    color: colors.text,
    marginBottom: spacing.m,
    lineHeight: 22,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.m,
  },
  price: {
    fontFamily: fonts.primary.bold,
    fontSize: 28,
    color: colors.text,
  },
  period: {
    fontFamily: fonts.secondary.regular,
    fontSize: fonts.size.body,
    color: colors.gray,
    marginLeft: spacing.xs,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.s,
  },
  contactName: {
    fontFamily: fonts.secondary.bold,
    color: colors.text,
  },
  contactPhone: {
    fontFamily: fonts.secondary.regular,
    color: colors.gray,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightGray,
    marginVertical: spacing.s,
  },
});

export default ProfileScreen;