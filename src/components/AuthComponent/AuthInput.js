import React from 'react';
import {
  StyleSheet, View, TextInput, Text
} from 'react-native';

const styles = StyleSheet.create({
  inputView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1a4189',
    marginBottom: 30
  },
  inputStyles: {
    height: '100%',
    fontSize: 15,
    paddingLeft: 20,
    backgroundColor: '#f7f7f7',
  }
});

export const AuthInput = (props) => {
  return (
    <View style={styles.inputView}>
      <View style={{ width: '100%', height: 40 }}>
        <TextInput
          onChangeText={props.onChange}
          style={styles.inputStyles}
          placeholder={props.placeHolder}
          placeholderTextColor="#80808080"
          selectionColor="#1a4189"
          secureTextEntry={props.secureTextEntry}
          underlineColorAndroid="transparent"
        />
        <Text style={{ color: 'red', fontSize: 10 }}>{props.errorText}</Text>
      </View>
    </View>
  );
};
