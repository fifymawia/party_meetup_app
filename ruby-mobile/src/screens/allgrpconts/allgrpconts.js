import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Button, Form } from 'native-base';
import { GetUsersGroups } from '../../../constants/Apis';
import { ScrollView } from 'react-native-gesture-handler';


const getUsersGroups = new GetUsersGroups();

class allgrpconts extends Component {

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


            <View style={{
                marginTop: 5, flex: 1, justifyContent: 'center',
                // backgroundColor: '$blackBlueColor',
            }}>
                <ScrollView>
                    <View style={{ marginBottom: 60 }}><Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Select a Group</Text></View>
                    {this.state.groups.map((group, i) => (

                        <View key={i}>
                            <Button block light style={{ marginTop: 20, borderRadius: 20 }}
                                onPress={() => this.props.navigation.navigate('Contributions',
                                    { groupId: group._id })}

                            >

                                <Text style={{
                                    color: '#BF2500',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                }}>
                                    {group.name} </Text>
                            </Button>

                        </View>

                    ))}
                </ScrollView>
            </View>
        )
    }

}
export default allgrpconts;
