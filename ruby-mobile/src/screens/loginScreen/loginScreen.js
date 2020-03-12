import React from 'react';
import { View, TextInput, Text, Alert, Image, ImageBackground } from 'react-native';
import { Form, Button, Item } from 'native-base';
import { login } from '../../../constants/Apis';
import PasswordInputText from 'react-native-hide-show-password-input';
import ValidationComponent from 'react-native-form-validator';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import styles from '../landingScreen/styles/landingScreen';
const bdimg = require(
    '../../../assets/images/bdimg.png'
)

export const saveToken = async token => {
    try {
        await AsyncStorage.setItem('token', token)
        //   alert('Data successfully saved!')
    } catch (e) {
        alert('Failed to save token.')
    }
}



class loginScreen extends ValidationComponent {
    constructor(props) {
        super(props);

        this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.FunctionToSubmitLogins = this.FunctionToSubmitLogins.bind(this);

        this.state = {
            phoneNumber: '',
            password: '',
        }
    }
    onChangephoneNumber(e) {
        this.setState({ phoneNumber: e })
    }
    onChangepassword(e) {
        this.setState({ password: e })
    }

    async FunctionToSubmitLogins(e) {
        e.preventDefault()


        const userObject = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,

        };
        this.validate({
            phoneNumber: {
                minlength: 10, maxlength: 12, keyboardType: 'numeric',
                required: true
            },
            password: { minlength: 6, maxlength: 10, required: true },

        });
        // calling the api from api.js
        const loguser = await login(userObject);
        this.setState({ phoneNumber: '', password: '' })
        if (loguser.token) {
            // @TODO store token and redirect: usign asyncStorage
            await saveToken(loguser.token);
            console.log('>>> Login Token', loguser.token);
            // this.setState({ token })

            this.props.navigation.navigate('Home', { name: loguser.firstName })
        } else {
            if (loguser.message) {
                Alert.alert(
                    'Something should pop up'
                );
            }

        }

    }



    render() {

        return (
            <View style={{flex: 1}}>
            <ImageBackground style={{ width: '100%', height: '100%', position: 'absolute'}} source={bdimg} />


<View>
                <View style={{ marginTop: '70%',  alignItems: 'center' }}>
                    <Text style={{ fontSize: 25 }}>Login Here
                </Text>
                </View>

                <View style={{ marginTop: '10%'}}>
                    <Form style={{alignContent: 'center'}}>

                        <Item style={{ marginTop: 20 }}>
                            <TextInput placeholder="Phone Number" value={this.state.phoneNumber} onChangeText={this.onChangephoneNumber} style={{ marginTop: 20, width: '100%' }}
                            />
                            {this.isFieldInError('phoneNumber') && this.getErrorsInField('phoneNumber').map(errorMessage => <Text>{errorMessage}</Text>)}

                        </Item >
                        <PasswordInputText value={this.state.password} onChangeText={this.onChangepassword} style={{ marginTop: 20, width: '100%' }} />
                        {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text>{errorMessage}</Text>)}


                        <View>
                            <Button block danger
                                style={{ marginTop: 50, borderRadius: 20 }}

                                onPress={this.FunctionToSubmitLogins}
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </Button>
                        </View>
                    </Form>


                </View>
            </View>
            </View> );
    }

}
export default loginScreen;
