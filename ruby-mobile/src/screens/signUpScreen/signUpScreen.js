import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Form, Button, Item } from 'native-base';
import PasswordInputText from 'react-native-hide-show-password-input';
import ValidationComponent from 'react-native-form-validator';


import { signup } from '../../../constants/Apis';


class signUpScreen extends ValidationComponent {
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

   async FunctionToSubmitData(e) {
          e.preventDefault()
          const userObject = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              // email: this.state.email,
              phoneNumber: this.state.phoneNumber,
              password: this.state.password,
          };
          // validation
          this.validate({
            firstName: {minlength:2, maxlength:10, required: true},
            lastName: {minlength:2, maxlength:10, required: true},
            phoneNumber: {minlength:10, maxlength:12,   keyboardType:'numeric',
            required: true},
            password: {minlength:6, maxlength:10, required: true},

        });
          // calling the api from api.js
          const user = await signup(userObject);
          this.setState({ firstName: '', lastName: '', phoneNumber: '', password: '' })
          if(user.token){
              // @TODO store token and redirect: usign asyncStorage
              this.props.navigation.navigate('Home')
          }else{
              // alert not working
              if(user.message){
                  Alert.alert(
                      'Something should pop up'
                    );
              }

          }
          console.log(user.token);
      }
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
                     {this.isFieldInError('firstName') && this.getErrorsInField('firstName').map(errorMessage => <Text>{errorMessage}</Text>) }

                 </Item>
                 <Item>
                     <TextInput placeholder="Last Name" value={this.state.lastName} onChangeText={this.onChangelastName} />
                     {this.isFieldInError('lastName') && this.getErrorsInField('lastName').map(errorMessage => <Text>{errorMessage}</Text>) }

                     </Item>
                {/* <Item>
                     <Input placeholder="Email (Optional)" value={this.state.email} onChange={this.onChangeemail} />
                     </Item> */}
                <Item>
                     <TextInput placeholder="Phone Number" value={this.state.phoneNumber} onChangeText={this.onChangephoneNumber} />
                     {this.isFieldInError('phoneNumber') && this.getErrorsInField('phoneNumber').map(errorMessage => <Text>{errorMessage}</Text>) }

              </Item>

              <PasswordInputText placeholder="Password" value={this.state.password} onChangeText={this.onChangepassword} />
              {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text>{errorMessage}</Text>) }

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
