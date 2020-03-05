import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Form, Button, Item } from 'native-base';


import { signup } from '../../../constants/groupApi';


class signUpScreen extends Component {
 constructor(props) {
     super(props);

     this.onChangefirstName =  this.onChangefirstName.bind(this);
     this.onChangelastName =  this.onChangelastName.bind(this);
     // this.onChangeemail =  this.onChangeemail.bind(this);
     this.onChangephoneNumber =  this.onChangephoneNumber.bind(this);
     this.onChangepassword =  this.onChangepassword.bind(this);
     this.FunctionToSubmitData = this.FunctionToSubmitData.bind(this);
    this.state = {
        firstName: '',
        lastName: '',
       // email: '',
        phoneNumber: '',
        password: '',

    }
}
onChangefirstName(e) {
    this.setState({ firstName: e})
}
onChangelastName(e) {
    this.setState({ lastName: e})
}
// onChangeemail(e) {
//     this.setState({ email: e.target.value })
// }
onChangephoneNumber(e) {
    this.setState({ phoneNumber: e})
}
onChangepassword(e) {
    this.setState({ password: e})
}

      FunctionToSubmitData(e) {
          e.preventDefault()
          const userObject = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              // email: this.state.email,
              phoneNumber: this.state.phoneNumber,
              password: this.state.password,
          };
          // console.log(this.state);
          const user = signup(userObject);
          console.log(user);

          this.setState({ firstName: '', lastName: '', phoneNumber: '', password: '' })
      }

    //   _checkIfButtonNextDisabled(){
    //       const {  firstName, lastName, phoneNumber, password } = this.state;
    //   }

    render() {

        return (
            <View>
               <View style={{marginTop: 10, alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>Sign Up Here
                </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                 <Form>
                <Item>
                     <TextInput placeholder="First Name" value={this.state.firstName} onChangeText={this.onChangefirstName}  />
                 </Item>
                 <Item>
                     <TextInput placeholder="Last Name" value={this.state.lastName} onChangeText={this.onChangelastName} />
                     </Item>
                {/* <Item>
                     <Input placeholder="Email (Optional)" value={this.state.email} onChange={this.onChangeemail} />
                     </Item> */}
                <Item>
                     <TextInput placeholder="Phone Number" value={this.state.phoneNumber} onChangeText={this.onChangephoneNumber} />
              </Item>
                <Item>
                     <TextInput placeholder="Password" value={this.state.password} onChangeText={this.onChangepassword} />
                     </Item>
                    <View>
                    <Button block danger
                    style={{ marginTop: 50}}
                   // disabled = {this._checkIfButtonNextDisabled()}
                    onPress = {this.FunctionToSubmitData}
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
