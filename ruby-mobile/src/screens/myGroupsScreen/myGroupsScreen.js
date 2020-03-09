import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Form} from 'native-base';




class myGroupsScreen extends Component {



    render() {

        return (
            <View  style={{ marginTop: 350 }}>
                <View>

                    <Button block danger
                        style={{ marginTop: 50 }}
                        // disabled = {this._checkIfButtonNextDisabled()}

                    >
                        <Text>group 1</Text>
                    </Button>
                </View>

                <View>
                    <Button
                        style={{ marginTop: 50, color:'$redColor'}}
                        // disabled = {this._checkIfButtonNextDisabled()}

                    >
                        <Text>Group2</Text>
                    </Button>
                </View>
            </View>
        );
    }

}
export default myGroupsScreen;
