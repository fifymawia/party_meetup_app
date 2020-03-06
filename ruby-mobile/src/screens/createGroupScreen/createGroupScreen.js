import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Input, Picker, Button } from 'native-base';
import DatePicker from 'react-native-datepicker';
// import { GroupApi } from '../../../constants/Apis';


//import { FormLabel, FormInput } from 'react-native-elements';
// const groupApi = new GroupApi();

class createGroupScreen extends Component {
    state = {
        name: '',
        description: '',
        bankAccount: '',
        frequency: '',
        amount: '',
        proposedDate: '',

    }

    constructor(props) {
        super(props);
        this.state = {date:"2020-03-1"}

        this.state = {
          selected2: undefined
        };

      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
      FunctionToOpenMembersActivity = () =>
      {
        // @TODO: store the form data
        // by creating form data object
        // use asyncStorage to store on app
         this.props.navigation.navigate('Add Members');

      }

      _checkIfButtonNextDisabled(){
          const { name, description, bankAccount, frequency, amount, proposedDate } = this.state;

         // if( name.length >5 && description.length > 10 && bankAccount.length > 1()){
        //      return false;
    //       }
    //       return true;
    //   }
    //   _createGroup = async () => {
    //       const { name, description, bankAccount } = this.state;
    //       const res = await groupApi.createGroup({
    //           name,
    //           description,
    //           bankAccount
    //       });
    //       console.log(res);
    //   }
}

    render() {
        return (
            <View>
               <View style={{marginTop: 10, alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>Group Setup Info
                </Text>
                </View>
                    <View style={{ marginTop: 20 }}>

                 <Form>
                   <Item>
                     <Input placeholder=" Group Name" value={this.state.name} />

                   </Item>
                   <Item >
                     <Input placeholder="Group Description" value={this.state.description} />
                   </Item>
                   <Item last>
                     <Input placeholder="Group Account Number" value={this.state.bankAccount} />
                   </Item>
                   <View>
                <Text style={{ marginTop: 10, marginLeft: 60, fontSize: 20 }}>Select Contribution Frequency
                </Text>
                </View>
                   <Item picker>
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Select your"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                style={{ marginTop: 10 }}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Daily" value="key0" />
                <Picker.Item label="Weekly" value="key1" />
                <Picker.Item label="Every 2 Weeks" value="key2" />
                <Picker.Item label="Monthly" value="key3" />
              </Picker>
            </Item>
            <Item style={{ marginTop: 15 }}>
                     <Input placeholder="Amount Per Contribution"  value={this.state.amount}/>
                   </Item>
                   <View>
                <Text style={{ marginTop: 15, marginLeft: 60, fontSize: 20 }}>Select Proposed Start Date
                </Text>
                </View>

<DatePicker
        style={{width: 200}}
        style={{ marginTop: 15, marginLeft: 80 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={new Date()}
        maxDate="2020-06-21"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

            <View>
              <Button block danger
              style={{ marginTop: 50}}
              disabled = {this._checkIfButtonNextDisabled()}
              onPress = {this.FunctionToOpenMembersActivity}
              >
                  <Text>Next</Text>
              </Button>
          </View>
                 </Form>


             </View>
</View>
        );
        }

    }
export default createGroupScreen;
