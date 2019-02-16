import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const trackListItem = props => (
  <TouchableOpacity onPress={props.onItemTouched}>
    <View style={styles.listItem}>
      <Image resizeMode="contain" source={props.trackImage} style={styles.trackImage}/>
      <Text>{props.trackName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  trackImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default trackListItem;
