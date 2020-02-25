import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, NotificationsScreen } from '../screens';

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
});
export default Tab;
 
