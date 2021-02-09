import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
      styles={styles.tabBarItem}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'man-sharp';
          }
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

const styles = StyleSheet.create({
  tabBarItem: {
    fontSize: 14,
    marginTop: 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default TabNavigator;
