/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  Platform,
  Pressable,
} from 'react-native';
import GeneralStatusBar from '../../statusbar/statusbar';
import LoadingIndicator from '../../utils/LoadingIndicator';
import ErrorView from '../../utils/ErrorView';
import {AirbnbRating, ButtonGroup} from 'react-native-elements';
import filter from 'lodash.filter';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CoachLookUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [nameList, setNameList] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const filterCoach = ['COACH', 'ALL'];
  const filterSkilllevel = ['NOVICE', 'COMPETENT', 'EXPERT'];
  const filterGender = ['MALE', 'FEMALE', 'ALL'];
  const filterPrivacy = ['PUBLIC', 'PRIVATE'];

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3030/product')
      .then((response) => response.json())
      .then((results) => {
        setNameList(results);
        setFullData(results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorView />;
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();

    const filteredData = filter(fullData, (group) => {
      return contains(group, formattedQuery);
    });

    setNameList(filteredData);
    setQuery(text);
  };

  const contains = (group, formattedQuery) => {
    if (
      group.owner_name.toLowerCase().includes(formattedQuery) ||
      group.title.toLowerCase().includes(formattedQuery)
    ) {
      return true;
    }

    return false;
  };

  const RowView = ({item}) => {
    return (
      <Pressable>
        <View style={styles.rowcontainer}>
          <View style={styles.rowstyle}>
            <View style={item.is_coach ? styles.coachtag : styles.nocoachtag} />
            <View style={styles.centralignstyle}>
              <View style={styles.header}>
                <Text style={styles.headertext}>
                  {item.title.toUpperCase()}
                </Text>
              </View>
              <View style={styles.moderatornamerow}>
                <View>
                  <Text style={styles.moderatornametitle}>ORGANISER : </Text>
                </View>
                <View>
                  <Text style={styles.moderatornametext}>
                    {item.owner_name}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rowstyle}>
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
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <GeneralStatusBar backgroundColor="white" barStyle="dark-content" />
      </View>
      <View style={styles.filter}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Search"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          style={styles.filterinput}
        />
      </View>
      <View style={styles.scrollfiltercontainer}>
        <View style={styles.scrollfilterViewHolder}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={true}
            showsVerticalScrollIndicator={false}>
            <View style={styles.scrollfilteritem}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <ButtonGroup
                  buttons={filterCoach}
                  containerStyle={{height: 60}}
                  buttonContainerStyle={{backgroundColor: 'lightblue'}}
                  textStyle={{color: 'black'}}
                  underlayColor="black"
                />
              </View>
            </View>
            <View style={styles.scrollfilterskillitem}>
              <View
                style={{flex: 1, justifyContent: 'center', borderRadius: 15}}>
                <ButtonGroup
                  buttons={filterSkilllevel}
                  containerStyle={{height: 60}}
                  buttonContainerStyle={{backgroundColor: 'lightblue'}}
                  textStyle={{color: 'black'}}
                  underlayColor="black"
                />
              </View>
            </View>
            <View style={styles.scrollfilterGender}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <ButtonGroup
                  buttons={filterGender}
                  containerStyle={{height: 60}}
                  buttonContainerStyle={{backgroundColor: 'lightblue'}}
                  textStyle={{color: 'black'}}
                  underlayColor="black"
                />
              </View>
            </View>
            <View style={styles.scrollfilteritem}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <ButtonGroup
                  buttons={filterPrivacy}
                  containerStyle={{height: 60}}
                  buttonContainerStyle={{backgroundColor: 'lightblue'}}
                  textStyle={{color: 'black'}}
                  underlayColor="black"
                />
              </View>
            </View>
            <View style={styles.scrollfilterCalendar}>
              <View style={styles.calendar}>
                <Pressable onPress={showDatepicker}>
                  <IconMC
                    name="calendar-blank"
                    size={70}
                    color="lightblue"
                    style={styles.calendarIcon}
                    onPress={showDatepicker}
                  />
                </Pressable>
              </View>
              <View
                style={{
                  flex: 0.65,
                  color: '#000000',
                  alignContent: 'center',
                  justifyContent: 'center',
                  textColor: '#000000',
                }}>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                    textColor="#000000"
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
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
  centralignstyle: {
    alignContent: 'center',
  },
  rowstyle: {
    flexDirection: 'row',
  },
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
  filter: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  filterinput: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    fontSize: 20,
  },
  scrollfiltercontainer: {
    paddingTop: 0,
    flex: 0.15,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  scrollfilterViewHolder: {
    alignItems: 'center',
    flex: 1,
  },
  scrollfilteritem: {
    width: 180,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
  },
  scrollfilterskillitem: {
    width: 300,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
  },
  scrollfilterGender: {
    width: 220,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
  },
  scrollfilterCalendar: {
    width: 180,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  datePickerStyle: {
    width: 200,
  },
  calendar: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.35,
  },
  calendarIcon: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
