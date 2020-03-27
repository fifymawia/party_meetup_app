import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import axios from 'axios'
import { login } from '../../../constants/Apis';
import { View, Text, Image } from 'react-native';
import { Button, Form } from 'native-base';
import styles from './styles/landingScreen';
const logo = require(
    '../../../assets/images/logo.png'
)

export const saveToken = async token => {
    try {
        await AsyncStorage.setItem('token', token)
        //   alert('Data successfully saved!')
    } catch (e) {
        alert('Failed to save token.')
    }
}


class landingScreen extends Component {

    componentDidMount(){
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

          _retrieveData();
    }

    FunctionToOpenLoginActivity = () => {
        this.props.navigation.navigate('Login');

    }
    FunctionToOpenSignUpActivity = () => {
        this.props.navigation.navigate('Sign Up');

    }


    render() {

        return (
            <View style={{ marginTop: 30, flex: 1 }}>
                <Image style={{ width: 300, height: 200, alignSelf: 'center', }} source={logo} />

                <View style={{ marginTop: '55%' }}>
                    <Button block danger
                        style={styles.buttonStyle}
                        onPress={this.FunctionToOpenLoginActivity}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </View>

                <View>
                    <Button block danger
                        style={styles.buttonStyle}
                        // disabled = {this._checkIfButtonNextDisabled()}
                        onPress={this.FunctionToOpenSignUpActivity}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Button>
                </View>
            </View>
        );
    }

}
export default landingScreen;
