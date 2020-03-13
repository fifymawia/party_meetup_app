import React, { Component } from 'react';
import { View, Text, Alert, Image } from 'react-native';
//import { MyContributionsList } from './components';
import {  GetUsersGroups } from '../../../constants/Apis';
import styles from './styles/HomeScreen';
// import { } from '../../../constants/Apis';
import { LoadingScreen } from '../../commons';
import { Button, Card, CardItem, Icon } from 'native-base';


// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

export const retrieveToken = async () => {
    try {
      return await AsyncStorage.getItem('token');
    } catch (e) {
      alert('Failed to load token.')
    }
  }

const  getUsersGroups = new GetUsersGroups();


class HomeScreen extends Component {
  static defaultProps = {

    getUsersGroups,
  }
    state = {
      loading: false,

      groups: [],
    }
    // async componentDidMount() {
    //   this.setState({ loading: true });
    //   const contributions = await this.props.contributionApi.fetchGroupContributions();
    //   this.setState({ loading: false,contributions });
    // //   setTimeout(() => this.setState({ loading: false, contributions }), 2000);
    // // AsyncStorage.getItem('token')
    // // .then(console.log)
    // // .catch(console.log)

    // }

    FunctionToOpenGroupActivity = async () => {
    // @TODO: fetch/get/read token
    const token = await retrieveToken();
        if (token !== null) {
            this.setState({ token });
            console.log('>>> Login Token At Homescreen', token);
            this.props.navigation.navigate('Create A New Group');
        } else{
            Alert.alert('error saving');
        }
    }
    FunctionToOpenMyGroups = async () => {
        // @TODO: onpress use token to get userId
        const token = await retrieveToken();
        if (token !== null) {
            this.setState({ token });
            console.log('>>> Login Token At Homescreen', token);
            this.props.navigation.navigate('My Groups');
        } else{
            Alert.alert('error saving');
        }
        //checks groups where user is admin


        // fetches



        }

    FunctionToOpenMyMyActivities = async () => {

                this.props.navigation.navigate('Activities');

        }


    render() {
        console.log(this.props.route)
      if (this.state.loading) {
        return (
          <LoadingScreen />
        );
      }
      return (
        <View style={styles.root}>

         <View style={styles.topContainer}>

          <Card style={{ alignSelf: 'center', marginTop: 200, width: 280 }}>
            <CardItem header button onPress={() => alert("You have an active session")}>
              <Text>Jace Copua</Text>
            </CardItem>
            <CardItem footer button onPress={() => alert("Allow Credbook To Access Your Location")}>
              <Text>Update My Address</Text>
            </CardItem>
            <CardItem footer button onPress={() => alert("Chiiiiiiiiil! This Shit Will Work Soon")}>
              <Text>Upload MoMo Statement</Text>
            </CardItem>
          </Card>
          </View>
          <View>

              <Button block light style={{ marginTop: 80 , borderRadius: 20}}
              onPress = { this.FunctionToOpenGroupActivity }
              //onPress={() => Alert.alert('Are you sure you want to create an account?')}
              >
                  <Text style={styles.buttonText}>Create New Group</Text>
              </Button>
          </View>
          <View>
              <Button block light style={{ marginBottom: 5, marginTop: 5, borderRadius: 20 }}
              onPress = { this.FunctionToOpenMyGroups }
              >
                  <Text style={styles.buttonText}>Record Savings</Text>
              </Button>
          </View>
          <View>
              <Button block light style={{ marginTop: 5 ,borderRadius: 20 }}

              onPress = { this.FunctionToOpenMyMyActivities }
              >
                  <Text style={styles.buttonText}>Activities and Progress</Text>
              </Button>
          </View>
          <View>
              <Button block light style={{ marginTop: 5 ,marginBottom:5, borderRadius: 20 }}

              onPress = { this.FunctionToOpenMyGroups }
              >
                  <Text style={styles.buttonText}>Members Verification</Text>
              </Button>
          </View>


{/*
          <View style={styles.bottomContainer}>
            <MyContributionsList contributions={this.state.contributions} />
          </View> */}
        </View>
      );
    }
}
export default HomeScreen;
