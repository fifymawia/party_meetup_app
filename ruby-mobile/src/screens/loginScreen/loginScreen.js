import React, { Component, useReducer } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Form, Button, Item } from 'native-base';
import { login } from '../../../constants/Apis';
import PasswordInputText from 'react-native-hide-show-password-input';




class loginScreen extends Component {
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
    onChangephoneNumber(e){
        this.setState({ phoneNumber: e })
    }
    onChangepassword(e){
        this.setState({ password: e })
    }

      FunctionToSubmitLogins(e) {
          e.preventDefault()
         // this.props.navigation.navigate('Home')
          const userObject = {
              phoneNumber: this.state.phoneNumber,
              password: this.state.password,

          };


      const loguser = login(userObject);
      console.log(loguser);

      this.setState({ phoneNumber: '', password: '' })
        }

    render() {

        return (
            <View>
               <View style={{marginTop: 10, alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>Login Here
                </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                 <Form>

                 <Item>
                     <TextInput placeholder="Phone Number" value={this.state.phoneNumber} onChangeText={this.onChangephoneNumber} />
              </Item>
              <PasswordInputText placeholder="Password" value={this.state.password} onChangeText={this.onChangepassword} />


                    <View>
                    <Button block danger
                    style={{ marginTop: 50}}

                    onPress = {this.FunctionToSubmitLogins}
                    >
                        <Text>Login</Text>
                    </Button>
                </View>
                 </Form>


             </View>
</View>
        );
        }

    }
export default loginScreen;
