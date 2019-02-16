import React from 'react';
import { View } from 'react-native';
import { AuthInput } from '../AuthInput';
import { AuthButton } from '../AuthButton';

const SignIn = (props) => {
  return (
    <View style={{ marginRight: 30, marginLeft: 30 }}>
      <AuthInput
        icon="ios-mail-outline"
        placeHolder="Email"
        onChange={(value) => props.onChange('userName', value)}/>
      <AuthInput
        icon="ios-lock-outline"
        placeHolder="Password"
        errorText={props.errSignIn}
        secureTextEntry={true}
        onChange={(value) => props.onChange('password', value)}/>
      <AuthButton btnText="Sign In" onPress={props.handleSignIn}/>
    </View>
  );
}

export default SignIn;
