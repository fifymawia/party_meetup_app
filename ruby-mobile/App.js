import React from 'react';
// import { Text } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';

// import colors
EStylesheet.build(Colors);
export default class App extends React.Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}
// export default App;
// Exponent.registerRootComponent(App);
