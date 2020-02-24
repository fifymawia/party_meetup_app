import React from 'react';
import { Components } from 'expo';
// import { Text } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';

// import colors
EStylesheet.build(Colors);
export default class App extends React.Component {
 state = {
   fontLoaded: false,
 }
 componentDidMount() {
   this._loadAssetsAsync();
 }
 async _loadAssetsAsync() {
   const fontAssets = cachedFonts([
     {

       montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
     },
     {
       montserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
     },
     {
       montserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
     },
     {
       montserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),

     },
   ]);
   await Promise.all(fontAssets);
   this.setState({ fontLoaded: true });
 }

 render() {
   if (!this.state.fontLoaded) {
     return <Components.AppLoading />;
   }
   return (
     <HomeScreen />
   );
 }
}
// export default App;
// Exponent.registerRootComponent(App);
