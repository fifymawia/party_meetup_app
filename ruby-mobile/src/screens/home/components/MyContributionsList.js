import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MyContributionsList';
import {Card, CardItem } from 'native-base';
import { contributionsScreen } from '../../contributionsScreen';


const MyContributionsList = ({ contributions }) => {
    const renderLastContribution = () => {
        const lastIndex = contributions.length - 1;
        const contribution = contributions[lastIndex];
        return (
            <View>

                <Card style={{ alignSelf: 'center',  width: 280, height: 50 }}>
                <CardItem header button onPress={() => alert("Pending Bank Verification")}>
                <Text style={{color: '#008000', marginTop: 5, fontSize: 10, }}>
                    Not Verified
                </Text>
                <Text style={{marginTop: 20}}>
                    {contribution.createdAt}
                </Text>
                    </CardItem>
                </Card>

            </View>
        );
    }
  // eslint-disable-next-line no-console
  console.log(contributions);
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
      {/* if(contributions.lenghth === i+1) */}
      { contributions.length && renderLastContribution()}


      </View>
      <View style={styles.contentContainer}>
      <Text style={{fontSize: 20}}> All My Group Savings(swipe)</Text>
        <ScrollView horizontal>
          {contributions.map((contribution, i) => (

            // eslint-disable-next-line react/no-array-index-key

            <View key={i} style={styles.contributionCard}>

              <View style={styles.contributionCardTop}>
              <Text style={{color: '#008000', marginTop: 5, fontSize: 20, }}>
                    Verified
                </Text>
                <Text style={{marginTop: 10, color: '#ffffff' }}>
                  {contribution.title}
                </Text>
                <Text style={{marginTop: 10, color: '#ffffff' }}>
                  {contribution.amount}
                </Text>
                <Text style={{marginTop: 30, color: '#ffffff' }}>
                  {contribution.createdAt}
                </Text>

              </View>
            </View>
          ))}
        </ScrollView>

      </View>
    </View>
  );
};

export default MyContributionsList;
