import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button} from 'native-base';




class loginScreen extends Component {



      FunctionToOpenLoginActivity = () =>
      {
         this.props.navigation.navigate('Login');

      }
      FunctionToOpenSignUpActivity = () =>
      {
         this.props.navigation.navigate('Sign Up');

      }


    render() {

        return (
            <View  style={{ marginTop: 350 }}>
                <View>

                    <Button block danger
                        style={{ marginTop: 50 }}
                        // disabled = {this._checkIfButtonNextDisabled()}
                        onPress={this.FunctionToOpenLoginActivity}
                    >
                        <Text>Login</Text>
                    </Button>
                </View>

                <View>
                    <Button block danger
                        style={{ marginTop: 50 }}
                        // disabled = {this._checkIfButtonNextDisabled()}
                        onPress={this.FunctionToOpenSignUpActivity}
                    >
                        <Text>Sign Up</Text>
                    </Button>
                </View>
            </View>
        );
    }

}
export default loginScreen;
