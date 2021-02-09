import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/components/navigator/BottomTabNavigator';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  }
}
