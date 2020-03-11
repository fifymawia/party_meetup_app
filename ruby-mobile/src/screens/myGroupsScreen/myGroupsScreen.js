import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Button, Form } from 'native-base';
import { GetUsersGroups } from '../../../constants/Apis';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    FunctionToOpenGroupContributions = () => {
        this.props.navigation.navigate('Record Contributions');
       
    }

    render() {

        return (
            <View style={{ marginTop: 100 }}>
                {this.state.groups.map((group, i) => (

                    <View key={i}>
                <Button block light style={{marginTop:5, borderRadius: 20}}
                onPress={this.FunctionToOpenGroupContributions}>
                    <Text style={{ color: '$whiteColor',
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
