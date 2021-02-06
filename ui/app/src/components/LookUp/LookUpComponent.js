import React, {PureComponent} from 'react';
import {Pressable, StyleSheet, View, ImageBackground, Text} from 'react-native';

const LookComponent = ({
  imagePath,
  displayText,
  lookUpBoxwidth,
  navigation,
}) => (
  <View>
    <Pressable
      hitSlop={styles.tabHitSlop}
      onPress={() => navigation.navigate('LookUpCoach')}>
      <View style={[styles.imageWrapper, lookUpBoxwidth]}>
        <ImageBackground
          style={styles.theImage}
          imageStyle={{opacity: 0.6}}
          source={imagePath}>
          <Text style={styles.text}>{displayText}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  </View>
);

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

export default LookComponent;
