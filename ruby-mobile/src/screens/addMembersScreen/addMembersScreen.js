import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
    {
      'title': 'Contacts',
      'message': 'CredBook would like to view your contacts.',
      'buttonPositive': 'Please accept bare mortal'
    }
  ).then(() => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied'){
        // error
      } else {
        // contacts returned in Array
      }
    });
  });


class addMembersScreen extends Component {
    // @TODO: add function to get all data and display on a pop up
    // keep the add memebers in state
    // read/fetch/get asyncStorage data
    // @create initial state and add group details key to it
    // state = {
    // member: '',
    // groupDetails: {}
    // }


    render() {
        return (
            <View>
               <View style={{marginTop: 30, alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>Group Setup Info
                </Text>
                </View>

             </View>

        );
        }

}
export default addMembersScreen;
