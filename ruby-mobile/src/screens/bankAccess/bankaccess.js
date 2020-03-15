import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Image, ImageBackground } from 'react-native';
import { Form, Button, Item } from 'native-base';
// import AsyncStorage from '@react-native-community/async-storage';

import styles from '../landingScreen/styles/landingScreen';
const bdimg = require(
    '../../../assets/images/bdimg.png'
)




class bankAccess extends Component {
    constructor(props) {
        super(props);

       // this.onChangeEmail = this.onChangeEmail.bind(this);

        this.FunctionToSubmitAccess = this.FunctionToSubmitAccess.bind(this);

        this.state = {
            email: '',

        }
    }
    // onChangephoneNumber(e) {
    //     this.setState({ email: e })
    // }

    async FunctionToSubmitAccess(e) {
        e.preventDefault()


        const userObject = {
            email: this.state.email,

        };
        this.validate({
            email: {
                minlength: 10, maxlength: 12, keyboardType: 'numeric',
                required: true
            }

        });

    }



    render() {

        return (
            <View style={{flex: 1}}>
            <ImageBackground style={{ width: '100%', height: '100%', position: 'absolute'}} source={bdimg} />


<View>
                <View style={{ marginTop: '70%',  alignItems: 'center' }}>
                    <Text style={{ fontSize: 25 }}>Share your financial statement
                </Text>
                </View>

                <View style={{ marginTop: '10%'}}>
                    <Form style={{alignContent: 'center'}}>

                        <Item style={{ marginTop: 20 }}>
                        <TextInput placeholder="2019_Fishsellers_2354566.CSV" value={this.state.statement}  style={{ marginTop: 20, width: '100%' }}
                            />
                            </Item>
                        <Item>
                            <TextInput placeholder="Enter Bank Email" value={this.state.email}  style={{ marginTop: 40, width: '100%' }}
                            />
                            {/* {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text>{errorMessage}</Text>)} */}

                        </Item >

                        <View>
                            <Button block danger
                                style={{ marginTop: 80, borderRadius: 20 }}

                                onPress={this.FunctionToSubmitLogins}
                            >
                                <Text style={styles.buttonText}>Give Access</Text>
                            </Button>
                        </View>
                    </Form>


                </View>
            </View>
            </View> );
    }

}
export default bankAccess;
