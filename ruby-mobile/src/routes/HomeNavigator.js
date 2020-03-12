import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createGroupScreen, addMembersScreen, signUpScreen, loginScreen, landingScreen, contributionsScreen, myGroupsScreen, activityScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Home = createStackNavigator();

export default function HomeNavigator() {
  return(
    <Home.Navigator initialRouteName="Credbook App">
         <Home.Screen
        name="Credbook App"
        component={landingScreen}>
      </Home.Screen>
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
      <Home.Screen
        name="Sign Up"
        component={signUpScreen}>
      </Home.Screen>
      <Home.Screen
        name="Login"
        component={loginScreen}>
      </Home.Screen>
      <Home.Screen
        name="Record Contributions"
        component={contributionsScreen}>
      </Home.Screen>
      <Home.Screen
        name="My Groups"
        component={myGroupsScreen}>
      </Home.Screen>
      <Home.Screen
        name="Activities"
        component={activityScreen}>
      </Home.Screen>
    </Home.Navigator>
  );
}

