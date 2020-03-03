import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Form, Input, Button, Item } from 'native-base';




class signUpScreen extends Component {
    state = {
        firstName: '',
        lastName: '',
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
          const {  firstName, lastName, phoneNumber, password } = this.state;
      }

    render() {
        if (this.state.loading) {
            return (
              <LoadingScreen />
            );
          }
        return (
            <View>
               <View style={{marginTop: 10, alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>Sign Up Here
                </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                 <Form>
                   <Item>
                     <Input placeholder="First Name" value={this.state.firstName} />

                   </Item>
                   <Item >
                     <Input placeholder="Last Name" value={this.state.lastName} />
                   </Item>
                   <Item >
                     <Input placeholder="Email (Optional)" value={this.state.email} />
                   </Item>
                   <Item last>
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
                        <Text>Sign Up</Text>
                    </Button>
                </View>
                 </Form>


             </View>
</View>
        );
        }

    }
export default signUpScreen;
