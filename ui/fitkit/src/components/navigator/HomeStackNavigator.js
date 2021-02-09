import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home/home';
import CoachLookUp from '../lookups/coachlookup/CoachLookUp';
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="CoachLookUp"
        component={CoachLookUp}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
