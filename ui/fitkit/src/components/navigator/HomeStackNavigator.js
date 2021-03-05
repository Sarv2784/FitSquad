import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home/home';
import CoachLookUp from '../lookups/coachlookup/CoachLookUp';
import GroupDetails from '../groupDetails/GroupDetails';
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
        name="GroupDetails"
        component={GroupDetails}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
