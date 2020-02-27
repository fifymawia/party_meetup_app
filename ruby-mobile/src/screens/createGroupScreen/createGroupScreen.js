import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Input, Picker, Button } from 'native-base';
import DatePicker from 'react-native-datepicker';


//import { FormLabel, FormInput } from 'react-native-elements';

class createGroupScreen extends Component {

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
         this.props.navigation.navigate('Add Members');
         
      }
    
     
    render() {
        return (
            <View>
               <View style={{marginTop: 30, alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>Group Setup Info
                </Text>
                </View>
                    <View style={{ marginTop: 20 }}>
              
                 <Form>
                   <Item>
                     <Input placeholder="Enter Group Name" />
                   </Item>
                   <Item last>
                     <Input placeholder="Group Description" />
                   </Item>
                   <Item picker>
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Select your"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                style={{ marginTop: 15 }}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Daily" value="key0" />
                <Picker.Item label="Weekly" value="key1" />
                <Picker.Item label="Every 2 Weeks" value="key2" />
                <Picker.Item label="Monthly" value="key3" />
              </Picker>
            </Item>
            <Item style={{ marginTop: 15 }}>
                     <Input placeholder="Enter Amount Per Contribution" />
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
              style={{ marginTop: 70}}
              onPress = { this.FunctionToOpenMembersActivity }
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