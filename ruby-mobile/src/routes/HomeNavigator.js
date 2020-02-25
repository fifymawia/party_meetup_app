import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';

// export default createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });
const Tab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
});
export default Tab;
 
