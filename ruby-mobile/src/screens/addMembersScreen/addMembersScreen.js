

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, CheckBox, Body, Content, Button } from 'native-base';
import AsyncStorage from 'react-native'
import { addMembers } from '../../../constants/Apis';



// export const saveContacts = async contacts => {
//     try {
//         await AsyncStorage.setItem('contacts', contacts)
//         //   alert('Data successfully saved!')
//     } catch (e) {
//         alert('Failed to save contacts.')
//     }
// }
// export const contacts = async () => {
//     try {
//       return await AsyncStorage.getItem('contacts');
//     } catch (e) {
//       alert('Failed to load Contacts.')
//     }
//   }



    export default function App({ route, navigation }) {
        const [contacts, setContacts] = useState([]);
        const [members, setMembers] = useState([]);
    useEffect(() => {
        (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
                setContacts(data);
            console.log(data[0]);
            }
        }
        })();
    }, []);

console.log(route);

  const setChecked = (members, data) => {
    let existingMember = members.find(x => x.phone === data.phone);
    // console.log(existingMember);
    if (existingMember) {
        return true;
    } else {
        return false;
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <Text>Contacts Module Example</Text>
        <Content>
            {contacts.map(contact => (
                <ListItem key={contact.id}>
                <Body>
                    <Text>{contact.name}</Text>
                    {contact.phoneNumbers && contact.phoneNumbers.map(phoneNumber => (
                        <View
                            key={phoneNumber.id}
                        >
                            <CheckBox
                                onPress={e => {
                                    console.log(members);
                                    const newMember = { name: contact.name, phone: phoneNumber.number };
                                    let newMembers = [];
                                    let existingMember = members.find(x => x.phone === newMember.phone);
                                    if (existingMember) {
                                        newMembers = members.filter(m => m.name !== newMember.name);
                                    } else {
                                        newMembers = [...members, newMember];
                                    }

                                    setMembers(newMembers);
                                }}
                                checked={setChecked(members, { name: contact.name, phone: phoneNumber.number })}
                            />
                            <Text>{phoneNumber.number}</Text>
                        </View>
                    ))}
                </Body>
            </ListItem>
            ))}
        </Content>
      </ScrollView>
      <Button
      block danger
      onPress={async e => {
          const formatedMemebers = members.map(member => ({ name: member.name, phoneNumber: member.phone }));
          console.log(formatedMemebers);
        //  const membersArray = [{
              const results = await Promise.all(formatedMemebers.map(m => addMembers({
                  ...m,
                  groupId: route.params.groupId
              })));
            if (results) {
                navigation.navigate('Home');
            } else {
                if (results.message) {
                    Alert.alert(
                        'Something should pop up'
                    );
                }

            }


      }}
      >
          <Text>Send</Text>
      </Button>
    </View>
  );
}

// export default addMembersScreen;
