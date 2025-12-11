import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// Real Screen Imports
import { LoginScreen, RegisterScreen, HomeScreen, SplashScreen } from '../screens/Placeholders';
import MapScreen from '../screens/Map/MapScreen';
import AssistantScreen from '../screens/Assistant/AssistantScreen';
import SOSScreen from '../screens/SOS/SOSScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import AlertsScreen from '../screens/Alert/AlertsScreen';

import { colors, fonts } from '../theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Auth Stack
const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

// Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.gray,
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 10,
        height: 60,
        paddingBottom: 8,
        paddingTop: 8,
      },
      tabBarLabelStyle: {
        fontFamily: fonts.secondary.medium,
        fontSize: 12,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen
      name="SOS"
      component={SOSScreen}
      options={{
        tabBarButton: (props) => (
          <View style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: colors.danger,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
            }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>SOS</Text>
            </View>
          </View>
        )
      }}
    />
    <Tab.Screen name="Alerts" component={AlertsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null); // Mock user state

  useEffect(() => {
    // Simulate splash delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Main" component={TabNavigator} />
        ) : (
          // Defaulting to TabNavigator for demo purposes
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;