import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Button, Form } from 'native-base';
import { GetUsersGroups } from '../../../constants/Apis';

const getUsersGroups = new GetUsersGroups();

class myGroupsScreen extends Component {

    static defaultProps = {

        getUsersGroups,
    }
    state = {
        loading: false,

        groups: [],

    }
    async componentDidMount() {
        this.setState({ loading: true });
        const groups = await this.props.getUsersGroups.fetchUsersGroup();
        this.setState({ loading: false, groups });

        console.log(groups);
    }

    render() {

        return (


            <View style={{marginTop: 50  }}>
                <View style={{ marginBottom: 80 }}><Text style={{ textAlign: 'center' , fontWeight: 'bold', fontSize: 20}}>Select a Group</Text></View>
                {this.state.groups.map((group, i) => (

                    <View key={i}>
                <Button block light style={{marginTop:20, borderRadius: 20}}
                onPress={() => this.props.navigation.navigate('Record Contributions',
                { groupId: group._id })}

               >

                    <Text style={{ color: '#BF2500',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        alignItems: 'center',}}>
                            {group.name} </Text>
                            </Button>

                    </View>

                ))}
             </View>
        )}

}
export default myGroupsScreen;
