import React from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import GeneralStatusBar from '../statusbar/statusbar';
import LookUpArea from '../lookups/lookup';
import UserDailyContent from '../user/dailyinfo';
import Welcome from '../user/welcome';

const screenwidth = Dimensions.get('screen').width;
const contentwidth = screenwidth * 0.9;

function Home(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <GeneralStatusBar backgroundColor="white" barStyle="dark-content" />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.appBody}>
          <View style={styles.contentBox}>
            <View style={styles.welcomeBox}>
              <Welcome />
            </View>
            <View style={styles.usercontentBox}>
              <UserDailyContent />
            </View>
            <View style={styles.userLookUpBox}>
              <LookUpArea contentwidth={contentwidth} navigation={navigation} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
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
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
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

export default Home;
