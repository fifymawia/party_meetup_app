import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeNavigator from './HomeNavigator';
import { HomeScreen } from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}
