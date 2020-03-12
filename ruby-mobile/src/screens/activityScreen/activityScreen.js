import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
const statimg = require(
    '../../../assets/images/statimg.png'
)


export default class activityScreen extends Component {


    render() {
        return (
            <View style={{  flex: 1 }}>
            <Image style={{ width: '100%', height: '100%' }} source={statimg} />
            </View>
        )
        }
    }
