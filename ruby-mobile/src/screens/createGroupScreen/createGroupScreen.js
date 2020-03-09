import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Form, Item, Picker, Button } from 'native-base';
import DatePicker from 'react-native-datepicker';
import ValidationComponent from 'react-native-form-validator';
import { createGroup } from '../../../constants/Apis';



//import { FormLabel, FormInput } from 'react-native-elements';
// const groupApi = new GroupApi();

class createGroupScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        // this.state = {proposedDate:"2020-03-1"}

        this.onChangename = this.onChangename.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangebankAccount = this.onChangebankAccount.bind(this);
        this.onValueChange2 = this.onValueChange2.bind(this);
        this.onChangeamount = this.onChangeamount.bind(this);
        this.FunctionToOpenMembersActivity = this.FunctionToOpenMembersActivity.bind(this);

        this.state = {
            name: '',
            description: '',
            bankAccount: '',
            frequency: undefined,
            amount: '',
            proposedDate: undefined,

        }
    }
    onChangename(e) {
        this.setState({ name: e })
    }
    onChangedescription(e) {
        this.setState({ description: e })
    }
    onChangebankAccount(e) {
        this.setState({ bankAccount: e })
    }
    onValueChange2(e) {
        this.setState({
            frequency: e
        });
    }
    onChangeamount(e) {
        this.setState({ amount: e })
    }
    async FunctionToOpenMembersActivity(e) {
        e.preventDefault()


        const groupObject = {
            name: this.state.name,
            description: this.state.description,
            bankAccount: this.state.bankAccount,
            frequency: this.state.frequency,
            amount: this.state.amount,
            proposedDate: this.state.proposedDate,

        };
        this.validate({
            name: { required: true },
            description: { minlength: 5, required: true },
            bankAccount: { minlength: 6, maxlength: 14, required: true },
            amount: { required: true },
            proposedDate: { required: true },



        });
        // calling the creategroup api from api.js
        const newGroup = await createGroup(groupObject);
        this.setState({ name: '', description: '', bankAccount: '', frequency: '', amount: '', proposedDate: '' })
        if (newGroup) {

            this.props.navigation.navigate('Add Members', { groupId: newGroup.result.group._id });
        } else {
            if (newGroup.message) {
                Alert.alert(
                    'Something should pop up'
                );
            }

        }
        console.log(newGroup);
    }


    render() {
        return (
            <View>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>Group Setup Info
                </Text>
                </View>
                <View style={{ marginTop: 20 }}>

                    <Form>
                        <Item>
                            <TextInput placeholder=" Group Name" value={this.state.name} onChangeText={this.onChangename} />
                            {this.getErrorsInField('name').map(errorMessage => <Text>{errorMessage}</Text>)}


                        </Item>
                        <Item >
                            <TextInput placeholder="Group Description" value={this.state.description} onChangeText={this.onChangedescription} />
                            {this.getErrorsInField('description').map(errorMessage => <Text>{errorMessage}</Text>)}

                        </Item>
                        <Item last>
                            <TextInput placeholder="Group Account Number" value={this.state.bankAccount} onChangeText={this.onChangebankAccount} />
                            {this.getErrorsInField('bankAccount').map(errorMessage => <Text>{errorMessage}</Text>)}

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
                                selectedValue={this.state.frequency}
                                style={{ marginTop: 10 }}
                                onValueChange={this.onValueChange2.bind(this)}

                            >
                                <Picker.Item label="Daily" value="Daily" />
                                <Picker.Item label="Weekly" value="Weekly" />
                                <Picker.Item label="Every 2 Weeks" value="Every 2 Weeks" />
                                <Picker.Item label="Monthly" value="Monthly" />
                            </Picker>
                        </Item>
                        <Item style={{ marginTop: 15 }}>
                            <TextInput placeholder="Amount Per Contribution" value={this.state.amount} onChangeText={this.onChangeamount} />
                            {this.getErrorsInField('amount').map(errorMessage => <Text>{errorMessage}</Text>)}

                        </Item>
                        <View>
                            <Text style={{ marginTop: 15, marginLeft: 60, fontSize: 20 }}>Select Proposed Start Date
                </Text>
                        </View>

                        <DatePicker
                            style={{ width: 200 }}
                            style={{ marginTop: 15, marginLeft: 80 }}
                            date={this.state.proposedDate}
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
                            onDateChange={(proposedDate) => { this.setState({ proposedDate: proposedDate }) }}
                        />

                        <View>
                            <Button block danger
                                style={{ marginTop: 50 }}
                                onPress={this.FunctionToOpenMembersActivity}
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
