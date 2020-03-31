import React, { Component } from 'react';
import { View, Text, Alert, ImageBackground } from 'react-native';
import  MyContributionsList  from '../home/components/MyContributionsList';
import {  ContributionApi } from '../../../constants/Apis';
import styles from '../home/styles/HomeScreen';
import { LoadingScreen } from '../../commons';
import { Button, Card, CardItem, Icon } from 'native-base';
// const bdimg = require(
//     '../../../assets/images/bdimg.png'
// )

const  contributionApi = new ContributionApi();


class allmycontributions extends Component {
    static defaultProps = {

      contributionApi,
    }
    state = {
        loading: false,

        contributions: [],
      }
        async componentWillMount() {
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

         <View style={{flex: 1 }}>

            {/* <ImageBackground style={{ width: '100%', height: '100%', position: 'absolute'}} source={bdimg} /> */}


         <View style={{ marginTop: '20%',  alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, color: '#BF2500' }}> Contributions with pending verification
                </Text>
                </View>

          <View style={{flex: 1, marginTop: 0}}>
            <MyContributionsList contributions={this.state.contributions} />
          </View>
          </View>
        </View>
      );
    }
}
export default allmycontributions;
