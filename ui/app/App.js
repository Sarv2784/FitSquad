import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text, Dimensions} from 'react-native';
import TabBar from './src/components/TabBar/TabBar';
import GeneralStatusBar from './src/components/StatusBar/GeneralStatusBar';
import LookUpBox from './src/components/Search/Lookup';
import UserDailyContent from './src/components/UserInfo/DailyInfo';
import Welcome from './src/components/UserInfo/Welcome';

const screenwidth = Dimensions.get('screen').width;
const contentwidth = screenwidth * 0.9;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <GeneralStatusBar backgroundColor="white" barStyle="dark-content" />
        </View>
        <View style={styles.appBody}>
          <View style={styles.contentBox}>
            <View style={styles.welcomeBox}>
              <Welcome />
            </View>
            <View style={styles.usercontentBox}>
              <UserDailyContent />
            </View>
            <View style={styles.userLookUpBox}>
              <LookUpBox contentwidth={contentwidth} />
            </View>
          </View>
        </View>
        <View style={styles.appFooter}>
          <TabBar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: screenwidth,
  },
  appHeader: {
    flex: 0.05,
  },
  appBody: {
    flex: 0.95,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appFooter: {
    flex: 0.1,
  },
  contentBox: {
    flex: 1,
    width: contentwidth,
  },
  welcomeBox: {
    backgroundColor: 'white',
    flex: 0.1,
    alignSelf: 'stretch',
  },
  usercontentBox: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flex: 0.65,
  },
  userLookUpBox: {
    backgroundColor: 'white',
    flex: 0.25,
  },
});
