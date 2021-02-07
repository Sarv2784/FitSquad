import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  SafeAreaView,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import ListView from '../../utils/ListView';
import GeneralStatusBar from '../../statusbar/statusbar';

export default function CoachLookUp() {
  return (
    <View style={styles.container}>
      <View>
        <GeneralStatusBar backgroundColor="white" barStyle="dark-content" />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text />
        </View>
        <ListView />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
