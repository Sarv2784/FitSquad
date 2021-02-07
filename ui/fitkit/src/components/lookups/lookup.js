import React, {PureComponent} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import LookUpBox from './lookupbox';
import coachImage from './../../images/Coach.jpg';
import nutritionistImage from './../../images/nutritionist.jpg';
import groupImage from './../../images/Group.jpg';
import joinImage from './../../images/join.jpg';

class UserLookUpBox extends PureComponent {
  render() {
    const lookupboxwidth = (this.props.contentwidth - 20) * 0.5;

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'grey',
            width: lookupboxwidth,
            height: 3,
            alignSelf: 'center',
            marginBottom: 5,
          }}
        />
        <View style={styles.lookupBox}>
          <ScrollView
            horizontal={true}
            style={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={true}
            showsVerticalScrollIndicator={false}>
            <View style={styles.usersearchBox}>
              <LookUpBox
                imagePath={coachImage}
                displayText={'Find \na \nCoach'}
                lookUpBoxwidth={{width: lookupboxwidth}}
              />
            </View>
            <View style={styles.usersearchBox}>
              <LookUpBox
                imagePath={groupImage}
                displayText={'Find \na \nGroup'}
                lookUpBoxwidth={{width: lookupboxwidth}}
              />
            </View>
            <View style={styles.usersearchBox}>
              <LookUpBox
                imagePath={joinImage}
                displayText={'Join \na \nGroup'}
                lookUpBoxwidth={{width: lookupboxwidth}}
              />
            </View>
            <View style={styles.usersearchBox}>
              <LookUpBox
                imagePath={nutritionistImage}
                displayText={'Find \na \nNutritionist'}
                lookUpBoxwidth={{width: lookupboxwidth}}
                navigation={this.props.navigation}
              />
            </View>
          </ScrollView>
        </View>
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
  lookUpImageWrapper: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
});

export default UserLookUpBox;
