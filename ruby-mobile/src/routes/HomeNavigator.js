import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createGroupScreen, addMembersScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Home = createStackNavigator();

export default function HomeNavigator() {
  return(
    <Home.Navigator initialRouteName="Home">
      <Home.Screen
        name="Home"
        component={TabNavigator}>
      </Home.Screen>
      <Home.Screen
        name="Create A New Group"
        component={createGroupScreen}>
      </Home.Screen>
      <Home.Screen
        name="Add Members"
        component={addMembersScreen}>
      </Home.Screen>
    </Home.Navigator>
  );
}
 
