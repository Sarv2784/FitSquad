import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class UserDailyContent extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, marginTop: 10, marginBottom: 10}}>
        <View style={styles.dailyContent} />
        <View style={styles.dailyqQuotes}>
          <Text style={styles.text}>
            "Today is a good day to workout. Let's start it today."
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dailyContent: {
    backgroundColor: 'rgba(0,0,0,.6)',
    borderRadius: 15,
    marginBottom: 10,
    flex: 0.75,
  },
  dailyqQuotes: {
    backgroundColor: 'white',
    flex: 0.25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'italic',
    fontSize: 20,
  },
});

export default UserDailyContent;
