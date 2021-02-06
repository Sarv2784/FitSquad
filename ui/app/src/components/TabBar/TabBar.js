import React, {PureComponent} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconION from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {Text} from '../UI';

class TabBar extends PureComponent {
  state = {
    activeTab: 'Home',
    activeColor: 'black',
    inactiveColor: 'lightblue',
  };

  isActive = (route) => {
    this.setState({activeTab: route});

    if (route === 'Home') {
      //Actions.replace(route);
      return false;
    }

   // routeFix(route);
  };

  render() {
    const {activeTab, activeColor, inactiveColor} = this.state;

    return (
      <View style={styles.tabBar}>
        <Pressable
          hitSlop={styles.tabHitSlop}
          onPress={() => this.isActive('Home')}>
          <View style={styles.tabBarBody}>
            <Icon
              name="home"
              size={38}
              color={activeTab === 'Home' ? activeColor : inactiveColor}
            />
            <Text>Home</Text>
          </View>
        </Pressable>
        <Pressable
          hitSlop={styles.tabHitSlop}
          onPress={() => this.isActive('Groups')}>
          <View style={styles.tabBarBody}>
            <IconMC
              name="account-group"
              size={35}
              color={activeTab === 'Groups' ? activeColor : inactiveColor}
            />
            <Text>Groups</Text>
          </View>
        </Pressable>
        <Pressable
          hitSlop={styles.tabHitSlop}
          onPress={() => this.isActive('Coach')}>
          <View style={styles.tabBarBody}>
            <IconION
              name="man-sharp"
              size={30}
              color={activeTab === 'Coach' ? activeColor : inactiveColor}
            />
            <Text>Coach</Text>
          </View>
        </Pressable>
        <Pressable
          hitSlop={styles.tabHitSlop}
          onPress={() => this.isActive('History')}>
          <View style={styles.tabBarBody}>
            <IconMC
              name="history"
              size={30}
              color={activeTab === 'History' ? activeColor : inactiveColor}
            />
            <Text>History</Text>
          </View>
        </Pressable>
        <Pressable
          hitSlop={styles.tabHitSlop}
          onPress={() => this.isActive('Invites')}>
          <View style={styles.tabBarBody}>
            <IconMI
              name="insert-invitation"
              size={30}
              color={activeTab === 'Invites' ? activeColor : inactiveColor}
            />
            <Text>Invites</Text>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 6,
    borderTopWidth: 0.8,
    borderTopColor: '#737373',
  },
  tabBarItem: {
    fontSize: 14,
    marginTop: 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabHitSlop: {
    top: 10,
    left: 20,
    bottom: 10,
    right: 20,
  },
});

export default TabBar;
