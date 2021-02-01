import React, {PureComponent} from 'react';
import {Pressable, StyleSheet, View, ImageBackground, Text} from 'react-native';
import coachImage from './../../assets/images/Group.jpg';

class SearchGroup extends PureComponent {
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
              <Text style={styles.text}>{'Find \na \nGroup'}</Text>
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

export default SearchGroup;
