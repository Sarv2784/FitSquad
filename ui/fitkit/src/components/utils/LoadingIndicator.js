import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="lightblue" />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicator;
