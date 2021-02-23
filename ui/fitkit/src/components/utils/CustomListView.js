import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const styles = StyleSheet.create({
  listcontainer: {
    flex: 1,
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 25,
    backgroundColor: '#FFF',
    elevation: 2,
    height: 150,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  description: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

const CustomRow = ({title, description}) => (
  <View style={styles.rowcontainer}>
    <View style={styles.container_text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

export default function CustomListview({itemList}) {
  return (
    <View style={styles.listcontainer}>
      <FlatList
        data={itemList}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
