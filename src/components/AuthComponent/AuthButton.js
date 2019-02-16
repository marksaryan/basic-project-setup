import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View
} from 'react-native';

const styles = StyleSheet.create({
  btnView: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtStyle: {
    fontSize: 17,
    color: 'white',
  }
});

export const AuthButton = (props) => {
  return (

    <TouchableOpacity onPress={props.onPress}>
      <View style={{ backgroundColor: '#1a4189' }}>
        <View style={styles.btnView}>
          <Text style={styles.txtStyle}>{props.btnText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
