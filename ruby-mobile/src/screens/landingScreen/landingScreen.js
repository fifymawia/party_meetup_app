import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Form } from 'native-base';
import styles from './styles/landingScreen';
const logo = require(
    '../../../assets/images/logo.png'
)



class loginScreen extends Component {



    FunctionToOpenLoginActivity = () => {
        this.props.navigation.navigate('Login');

    }
    FunctionToOpenSignUpActivity = () => {
        this.props.navigation.navigate('Sign Up');

    }


    render() {

        return (
            <View style={{ marginTop: 400 }}>

                <View>
                <Image style={{width: 10, height: 10}} source={logo}/>
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
export default loginScreen;
