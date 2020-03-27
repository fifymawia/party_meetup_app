import React from 'react';
import { Image, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import {AsyncStorage} from 'react-native';
import axios from 'axios'
const mySplash = require(
    '../../../assets/mysplash.png'
)

export const saveToken = async token => {
    try {
        await AsyncStorage.setItem('token', token)
        //   alert('Data successfully saved!')
    } catch (e) {
        alert('Failed to save token.')
    }
}

export default class AppLoader extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._retrieveData}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      ); }

    return (
      <View style={{ flex: 1 }}>
        <Image source={ mySplash } />
      </View>
    );
  }


    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            // We have data!!
            console.log('==stored data==', value);
            // check if not expired
            const notExpired = await axios.post('/me/verify', {token: value});
            console.log(notExpired.data);

            if(notExpired.data.newToken){
                await saveToken(notExpired.data.newToken);
                console.log('>>> Login Token', notExpired.data.newToken);
                // this.setState({ token: notExpired.data.newToken })
                this.props.navigation.navigate('Home', { name: notExpired.data.firstName, token: notExpired.data.newToken })
            }
          }
        } catch (error) {
          // Error retrieving data
          console.log(error)
        }
    };

}
