import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NotificationsScreen extends Component {
    render() {
        return(
            <View style={{ flex: 1 }}>
                <Text>You Do Not Have Any Notifications</Text>
            </View>
        )
    };

} 
export default NotificationsScreen;