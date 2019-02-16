import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  txtStyle: {
    fontSize: 17,
    color: '#1a4189'
  }
});

export const ChangeButton = (props) => {
  return (

    <TouchableOpacity onPress={props.onPress} style={styles.btnStyle}>
      <Text style={styles.txtStyle}>{props.changeText}</Text>
    </TouchableOpacity>
  );
};
