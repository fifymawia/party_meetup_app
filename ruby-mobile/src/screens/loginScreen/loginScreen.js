import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Form, Input, Button, Item } from 'native-base';




class loginScreen extends Component {
    state = {
        phoneNumber: '',
        password: '',

    }

    constructor(props) {
        super(props);

      FunctionToOpenMembersActivity = () =>
      {
         this.props.navigation.navigate('Home');

      }

    }
      _checkIfButtonNextDisabled(){
          const { phoneNumber, password } = this.state;
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

                   <Item >
                     <Input placeholder="Phone Number" value={this.state.phoneNumber} />
                   </Item>
                   <Item last>
                     <Input placeholder="Password" value={this.state.password} />
                   </Item>


                    <View>
                    <Button block danger
                    style={{ marginTop: 50}}
                    disabled = {this._checkIfButtonNextDisabled()}
                    onPress = {this.FunctionToOpenMembersActivity}
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
