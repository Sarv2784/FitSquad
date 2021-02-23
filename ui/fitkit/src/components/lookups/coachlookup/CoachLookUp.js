/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import GeneralStatusBar from '../../statusbar/statusbar';
import {AirbnbRating} from 'react-native-elements';

export default function CoachLookUp() {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/product')
      .then((response) => response.json())
      .then((json) => setNameList(json))
      .catch((error) => console.error(error));
  }, []);

  const RowView = ({item}) => {
    return (
      <View style={styles.rowcontainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={item.is_coach ? styles.coachtag : styles.nocoachtag} />
          <View style={{alignContent: 'center'}}>
            <View style={styles.header}>
              <Text style={styles.headertext}>{item.title.toUpperCase()}</Text>
            </View>
            <View style={styles.moderatornamerow}>
              <View>
                <Text style={styles.moderatornametitle}>ORGANISER : </Text>
              </View>
              <View>
                <Text style={styles.moderatornametext}>{item.owner_name}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.moderatorinfocard}>
            <View>
              <Image source={{uri: item.image_url}} style={styles.photo} />
            </View>
            <View>
              <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={3}
                size={15}
              />
            </View>
          </View>
          <View style={styles.groupinfocard}>
            <View style={styles.groupinfocardrow}>
              <View>
                <Text style={styles.groupinfocardtitle}>JOINED : </Text>
              </View>
              <View>
                <Text style={styles.groupinfocardtext}>
                  {item.member_count}
                </Text>
              </View>
            </View>
            <View style={styles.groupinfocardrow}>
              <View>
                <Text style={styles.groupinfocardtitle}>TIMING : </Text>
              </View>
              <View>
                <Text style={styles.groupinfocardtext}>{item.timing}</Text>
              </View>
            </View>
            <View style={styles.groupinfocardrow}>
              <View>
                <Text style={styles.groupinfocardtitle}>RATING : </Text>
              </View>
              <View>
                <AirbnbRating
                  count={5}
                  showRating={false}
                  isDisabled={true}
                  defaultRating={3}
                  size={15}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <GeneralStatusBar backgroundColor="white" barStyle="dark-content" />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={nameList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <RowView item={item} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  rowcontainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 20,
    backgroundColor: 'gray',
    elevation: 2,
    height: 200,
  },
  header: {
    height: 35,
    padding: 5,
    alignItems: 'center',
  },
  headertext: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  moderatornamerow: {
    height: 30,
    padding: 5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  moderatornametitle: {
    fontSize: 15,
    color: 'white',
  },
  moderatornametext: {
    fontSize: 15,
    fontStyle: 'italic',
    color: 'white',
  },
  moderatorinfocard: {
    flexDirection: 'column',
    padding: 10,
    width: 125,
    alignContent: 'flex-start',
  },
  moderatorinfo: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    padding: 10,
  },
  moderatorinforow: {
    height: 30,
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  moderatorinfotitle: {
    fontSize: 14,
    color: 'white',
  },
  groupinfocard: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    padding: 10,
  },
  groupinfocardrow: {
    height: 30,
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  groupinfocardtitle: {
    fontSize: 14,
    color: 'white',
  },
  groupinfocardtext: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'white',
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignContent: 'center',
  },
  coachtag: {
    borderTopWidth: 65,
    borderRightWidth: 65,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: 'tomato',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopLeftRadius: 20,
  },
  nocoachtag: {
    height: 65,
    width: 65,
  },
});
