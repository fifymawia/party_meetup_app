import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeNavigator from './HomeNavigator';
import { NotificationsScreen } from '../screens';
import HomeNavigator from './HomeNavigator';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      
    </Tab.Navigator>
  );
  }