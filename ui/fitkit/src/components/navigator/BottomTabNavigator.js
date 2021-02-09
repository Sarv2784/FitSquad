import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIicons from 'react-native-vector-icons/MaterialIcons';
import HomeStackNavigator from './HomeStackNavigator';
import CoachLookUp from '../lookups/coachlookup/CoachLookUp';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'man-sharp';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={36} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'lightblue',
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={CoachLookUp} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
