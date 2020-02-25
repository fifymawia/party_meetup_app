import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MyContributionsList } from './components';
import { ContributionApi } from '../../../constants/api';
import styles from './styles/HomeScreen';
import { LoadingScreen } from '../../commons';

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
      // this.setState({ loading: false,contributions });
      setTimeout(() => this.setState({ loading: false, contributions }), 2000);
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

          <View style={styles.bottomContainer}>
            <MyContributionsList contributions={this.state.contributions} />
          </View>
        </View>
      );
    }
}
export default HomeScreen;
