import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MyContributionsList';

const MyContributionsList = ({ contributions }) => {
  // eslint-disable-next-line no-console
//   console.log(contributions);
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Group Conrtibutions</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView horizontal>
          {contributions.map((contribution, i) => (
  
            // eslint-disable-next-line react/no-array-index-key
            <View key={i} style={styles.contributionCard}>
  
              <View style={styles.contributionCardTop}>
  
                <Text style={styles.contributionCardTitle}>
                  {contribution.title}
                </Text>
              </View>
              <View style={styles.contributionCardBottom}>
                <Text style={styles.contributionCardMetaName}>
                  {contribution.group.name}
                </Text>
                <Text style={styles.contributionCardDate}>
                    oct 31 2019
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
