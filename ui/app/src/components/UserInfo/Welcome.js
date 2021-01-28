import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Welcome extends PureComponent {
  render() {
    return (
      <View style={styles.dailyContent}>
        <Text style={styles.text}>Welcome TestUser</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dailyContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    fontStyle: 'italic',
  },
});

export default Welcome;
