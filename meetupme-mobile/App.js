import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchMeetups } from './constants/api';

export default class App extends React.Component {
  state = {
    loading: false,
    meetups: []
  }

   async componentDidMount() {
     try {
      this.setState({ loading: true });
      const data = await fetchMeetups();
      console.log(data);
      this.setState({ loading: false, meetups:data.meetups});
     } catch (error) {
      this.setState({ loading: false, meetups: []});
     }
  }

 render() {
  if(this.state.loading){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
   return (
     <View style={styles.container}>
       <Text>MeetupME!</Text>
       {this.state.meetups.map((meetup, i) => (
         <Text key={i}> {meetup.title} {meetup.description}</Text>
         
       ))}
     </View>
  );
 }
 
}
      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
