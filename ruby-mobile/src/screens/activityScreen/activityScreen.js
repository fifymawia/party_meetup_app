import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button} from 'native-base';
const statimg = require(
    '../../../assets/images/statimg.png'
)


export default class activityScreen extends Component {


    FunctionToOpenbankAccess = async () => {

        this.props.navigation.navigate('Bank Access');

}

    render() {
        return (
            <View style={{  flex: 1 }}>

            <Image style={{ width: '100%', height: '90%' }} source={statimg} />
            <Button block light style={{ borderRadius: 20, marginTop: 5}}
              onPress = { this.FunctionToOpenbankAccess }
              //onPress={() => Alert.alert('Are you sure you want to create an account?')}
              >
                  <Text >Use this Data</Text>
              </Button>
            </View>

        )
        }
    }
