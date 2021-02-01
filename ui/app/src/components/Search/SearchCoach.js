import React, {PureComponent} from 'react';
import {Pressable, StyleSheet, View, ImageBackground, Text} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import coachImage from './../../assets/images/Coach.jpg';

class SearchCoach extends PureComponent {
  render() {
    const style = this.props.style;
    const imageWrapperStyle = styles.imageWrapper;
    const combineStyles = StyleSheet.flatten([imageWrapperStyle, style]);

    return (
      <View>
        <Pressable hitSlop={styles.tabHitSlop}>
          <View style={combineStyles}>
            <ImageBackground
              style={styles.theImage}
              imageStyle={{opacity: 0.6}}
              source={coachImage}>
              <Text style={styles.text}>{'Find \na \nCoach'}</Text>
            </ImageBackground>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  theImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  tabHitSlop: {
    top: 10,
    left: 20,
    bottom: 10,
    right: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default SearchCoach;
