import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
// import { Text } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import Root from './src/Routes';
// import { HomeScreen } from './src/screens';
// import { cachedFonts } from './helpers';

// import colors
EStylesheet.build(Colors);

export default class App extends React.Component {
 state = {
   fontLoaded: false,
 }
  //  componentDidMount() {
  //    this._loadAssetsAsync();
  //  }
  //  async _loadAssetsAsync() {
  //    const fontAssets = cachedFonts([
    componentWillMount = async () => {
      await Font.loadAsync(
        {

          montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
        });

      this.setState({ fontLoaded: true });
    }
    render() {
      if (!this.state.fontLoaded) {
        return <ActivityIndicator />;
      }
      return (
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      );
    }
}
// export default App;
// Exponent.registerRootComponent(App);
