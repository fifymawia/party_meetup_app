import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, 
    NotificationsScreen,
    createGroupScreen,
 } from '../screens';

// export default createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });
const Tab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  Groups: {
      screen: createGroupScreen,
  },
});
export default Tab;
 
