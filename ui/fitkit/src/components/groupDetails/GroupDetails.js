import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList, Text} from 'react-native';
import GeneralStatusBar from '../statusbar/statusbar';
import LoadingIndicator from '../utils/LoadingIndicator';
import ErrorView from '../utils/ErrorView';

export default function GroupDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [nameList, setNameList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3030/product')
      .then((response) => response.json())
      .then((results) => {
        setNameList(results);
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

  const RowView = ({item}) => {
    return (
      <View style={styles.rowcontainer}>
        <View style={styles.rowstyle} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <GeneralStatusBar backgroundColor="white" barStyle="dark-content" />
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>YOGA</Text>
        </View>
        <View style={styles.aboutGroup}>
          <Text>Group Info:</Text>
          <Text>Coach Info</Text>
        </View>
        <View style={styles.meemberlistcontainer}>
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
  meemberlistcontainer: {
    backgroundColor: 'white',
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
  rowcontainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 10,
    backgroundColor: 'gray',
    elevation: 2,
    height: 75,
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
  aboutGroup: {
    height: 400,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: 'gray',
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignContent: 'center',
  },
});
