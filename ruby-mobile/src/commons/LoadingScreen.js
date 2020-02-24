import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles/LoadingScreen';
// replace activity loader with logo 
const LoadingScreen = () => (
  <View style={styles.root}>
    <ActivityIndicator
      size="large"
    />
  </View>
);
export default LoadingScreen;
