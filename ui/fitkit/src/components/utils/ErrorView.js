import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ErrorView = () => (
  <View style={styles.container}>
    <Text style={styles.containertext}>Error fetching data...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containertext: {
    fontSize: 18,
  },
});

export default ErrorView;
