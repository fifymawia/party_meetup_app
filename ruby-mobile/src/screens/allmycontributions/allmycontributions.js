import React, { Component } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import  MyContributionsList  from '../home/components/MyContributionsList';
import {  ContributionApi } from '../../../constants/Apis';
import styles from '../home/styles/HomeScreen';
import { LoadingScreen } from '../../commons';
import { Button, Card, CardItem, Icon } from 'native-base';

const  contributionApi = new ContributionApi();


class allmycontributions extends Component {
    static defaultProps = {

      contributionApi,
    }
    state = {
        loading: false,

        contributions: [],
      }
        async componentDidMount() {
         console.log(this.props)
        const { params } = this.props.route;
         const groupId = params ? params.groupId : null;
         console.log(groupId);
      this.setState({ loading: true });
      const contributions = await this.props.contributionApi.fetchGroupContributions(groupId);
      this.setState({ loading: false,contributions });


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

          <View>
              <Button block light style={{ marginTop: 5 ,marginBottom: 20, borderRadius: 20 }}

              onPress = { this.FunctionToOpenMyGroups }
              >
                  <Text style={styles.buttonText}>Members Verification</Text>
              </Button>
          </View>

          <View style={styles.bottomContainer}>
            <MyContributionsList contributions={this.state.contributions} />
          </View>
          </View>
        </View>
      );
    }
}
export default allmycontributions;
