import React, {PureComponent} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import SearchCoach from './SearchCoach';
import SearchGroup from './SearchGroup';

class UserLookUpBox extends PureComponent {
  render() {
    const lookupboxwidth = (this.props.contentwidth - 20) * 0.5;

    return (
      <View style={styles.lookupBox}>
        <View style={styles.usersearchBox}>
          <SearchCoach style={{width: lookupboxwidth}} />
        </View>
        <View style={styles.usersearchBox}>
          <SearchGroup style={{width: lookupboxwidth}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lookupBox: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
    alignContent: 'center',
  },
  usersearchBox: {
    backgroundColor: 'rgba(0,0,0,.6)',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default UserLookUpBox;
