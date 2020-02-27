import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createGroupScreen,
    addMembersScreen,
 } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Group = createStackNavigator();

export default function GroupNavigator() {
  return(
    <Group.Navigator initialRouteName="Create A New Group">
      <Group.Screen
       name="Create A New Group"
       component={createGroupScreen}>>
      </Group.Screen>
      <Group.Screen
       name="Add Members"
       component={addMembersScreen}>
      </Group.Screen>

     
    </Group.Navigator>
  );
}