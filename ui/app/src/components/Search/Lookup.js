import React, {PureComponent} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import SearchCoach from './SearchCoach';
import SearchGroup from './SearchGroup';
import Nutritionist from './SearchNutritionist';

class UserLookUpBox extends PureComponent {
  render() {
    const lookupboxwidth = (this.props.contentwidth - 20) * 0.5;

    return (
      <View style={{flex: 1}}>
        <View style={styles.lookupBox}>
          <ScrollView
            horizontal={true}
            style={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={true}
            showsVerticalScrollIndicator={false}>
            <View style={styles.usersearchBox}>
              <SearchCoach style={{width: lookupboxwidth}} />
            </View>
            <View style={styles.usersearchBox}>
              <SearchGroup style={{width: lookupboxwidth}} />
            </View>
            <View style={styles.usersearchBox}>
              <Nutritionist style={{width: lookupboxwidth}} />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            width: lookupboxwidth,
            height: 3,
            alignSelf: 'center',
            marginBottom: 5,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lookupBox: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    alignContent: 'center',
  },
  usersearchBox: {
    backgroundColor: 'rgba(0,0,0,.6)',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default UserLookUpBox;
