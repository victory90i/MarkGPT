import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Switch, Dimensions } from 'react-native';
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { colors, fonts, spacing } from '../../theme';
import { useUser } from '../../context/UserContext';
import SafetyBanner from '../../components/SafetyBanner';
import Button from '../../components/Button';

// Mock Data for other users
const MOCK_USERS = [
  { id: '1', lat: 3.8480, lng: 11.5021, name: 'Alice', status: 'safe' }, // Yaounde area
  { id: '2', lat: 3.8580, lng: 11.5121, name: 'Bob', status: 'danger' },
  { id: '3', lat: 3.8380, lng: 11.4921, name: 'Charlie', status: 'safe' },
];

const MapScreen = () => {
  const { user, upgradeToPremium, downgradeToFree } = useUser();
  const [region, setRegion] = useState({
    latitude: 3.8480,
    longitude: 11.5021,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Premium toggle for demo purposes
  const togglePremium = () => {
    if (user.isPremium) downgradeToFree();
    else upgradeToPremium();
  };

  return (
    <View style={styles.container}>
      {/* Top Overlay for Alerts */}
      <View style={styles.topOverlay}>
        <SafetyBanner
          type="danger"
          message="Civil unrest reported in Bamenda central. Avoid main avenue."
        />
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        customMapStyle={mapStyle} // Dark mode style can be added here
      >
        {/* Render Users based on Subscription Plan */}
        {MOCK_USERS.map((otherUser) => (
          user.isPremium ? (
            // PREMIUM: Show details, name, status
            <Marker
              key={otherUser.id}
              coordinate={{ latitude: otherUser.lat, longitude: otherUser.lng }}
              title={otherUser.name}
              description={`Status: ${otherUser.status}`}
            >
              <View style={[styles.premiumMarker, otherUser.status === 'danger' && styles.dangerMarker]}>
                <Text style={styles.markerText}>{otherUser.name[0]}</Text>
              </View>
            </Marker>
          ) : (
            // FREE: Show anonymous dots only
            <Circle
              key={otherUser.id}
              center={{ latitude: otherUser.lat, longitude: otherUser.lng }}
              radius={300}
              fillColor={otherUser.status === 'danger' ? 'rgba(211, 47, 47, 0.5)' : 'rgba(76, 175, 80, 0.5)'}
              strokeColor="transparent"
            />
          )
        ))}

        {/* Current User Marker */}
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }}>
          <View style={styles.myLocationMarker}>
            <View style={styles.myLocationDot} />
          </View>
        </Marker>
      </MapView>

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Simulate Premium: {user.isPremium ? 'ON' : 'OFF'}</Text>
          <Switch value={user.isPremium} onValueChange={togglePremium} trackColor={{ true: colors.primary }} />
        </View>
        {!user.isPremium && (
          <Button
            title="Upgrade for Live Tracking"
            variant="primary"
            style={styles.upgradeButton}
            onPress={upgradeToPremium}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topOverlay: {
    paddingTop: 50,
    zIndex: 10,
  },
  premiumMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  dangerMarker: {
    backgroundColor: colors.danger,
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  myLocationMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(25, 118, 210, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myLocationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: 'white',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: spacing.m,
    elevation: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.s,
  },
  toggleText: {
    fontFamily: fonts.secondary.medium,
    color: colors.text,
  },
  upgradeButton: {
    marginTop: spacing.s,
  }
});

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#212121" }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#212121" }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#2c2c2c" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#000000" }]
  }
];

export default MapScreen;