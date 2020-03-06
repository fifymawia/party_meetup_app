import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { MyContributionsList } from './components';
import { ContributionApi } from '../../../constants/Apis';
import styles from './styles/HomeScreen';
import { LoadingScreen } from '../../commons';
import { Button } from 'native-base';

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
    }
    FunctionToOpenGroupActivity = () => {
    // @TODO: fetch/get/read token
    // if token: navigate to create group
     this.props.navigation.navigate('Create A New Group');
    // else alert user authorized

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
              >
                  <Text>My Groups</Text>
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
