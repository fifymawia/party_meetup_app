import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { MyContributionsList } from './components';
import { ContributionApi } from '../../../constants/Apis';
import styles from './styles/HomeScreen';
import { LoadingScreen } from '../../commons';
import { Button } from 'native-base';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

export const retrieveToken = async () => {
    try {
      return await AsyncStorage.getItem('token');
    } catch (e) {
      alert('Failed to load token.')
    }
  }


const contributionApi = new ContributionApi();

class HomeScreen extends Component {
  static defaultProps = {
    contributionApi,
  }
    state = {
      loading: false,
      contributions: [],
    }
    async componentDidMount() {
      this.setState({ loading: true });
      const contributions = await this.props.contributionApi.fetchGroupContributions();
      this.setState({ loading: false,contributions });
    //   setTimeout(() => this.setState({ loading: false, contributions }), 2000);
    // AsyncStorage.getItem('token')
    // .then(console.log)
    // .catch(console.log)
    
    }

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
    FunctionToOpenContributionsActivity = async () => {
        // @TODO: fetch/get/read token
        const token = await retrieveToken();
            if (token !== null) {
                this.setState({ token });
                console.log('>>> Login Token At Homescreen', token);
                this.props.navigation.navigate('Record Contributions');
            } else{
                Alert.alert('error saving');
            }
        }


    render() {
      if (this.state.loading) {
        return (
          <LoadingScreen />
        );
      }
      return (
        <View style={styles.root}>
          <View style={styles.topContainer}>
            <Text>HomeScreen</Text>
          </View>
          <View>
              <Button block light style={{ marginBottom: 5 }}
              onPress = { this.FunctionToOpenGroupActivity }
              //onPress={() => Alert.alert('Are you sure you want to create an account?')}
              >
                  <Text>Create New Group</Text>
              </Button>
          </View>
          <View>
              <Button block light
              onPress = { this.FunctionToOpenGroupActivity }
              >
                  <Text>Record Today's Contributions</Text>
              </Button>
          </View>

          <View style={styles.bottomContainer}>
            <MyContributionsList contributions={this.state.contributions} />
          </View>
        </View>
      );
    }
}
export default HomeScreen;
