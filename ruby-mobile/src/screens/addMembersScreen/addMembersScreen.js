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
