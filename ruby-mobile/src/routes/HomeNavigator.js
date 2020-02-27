import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, 
    // NotificationsScreen,
    createGroupScreen,
 } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

// export default createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });
// const groupNav = createStackNavigator({
//     Group: {
//         screen: createGroupScreen,
//       },
// });
// const Tab = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Notifications: {
//     screen: NotificationsScreen,
//   },
// });
// export default { Tab, groupNav };
const Home = createStackNavigator();

export default function HomeNavigator() {
  return(
    <Home.Navigator initialRouteName="Home">
      <Home.Screen
        name="Home"
        component={HomeScreen}>
      </Home.Screen>
      <Home.Screen
        name="Create A New Group"
        component={createGroupScreen}>
      </Home.Screen>
     
    </Home.Navigator>
  );
}
 
