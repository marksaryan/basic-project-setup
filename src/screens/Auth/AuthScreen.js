import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar, Text, Alert, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SignIn } from '../../components/AuthComponent/SignIn';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import i18n from '../../locales/i18n';
import { pushTrackListScreen } from 'AppNavigator';

class AuthScreen extends PureComponent<WithNamespaces> {
  state = {
    showIndicator: false,
    user: {
      userName: '',
      password: '',
    },
  };

  handleChangeInput = (key, value) => {
    if (this.props.errSignIn && value.length === 1) this.props.resetAction("RESET_SIGN_IN_ERROR");
    const user = Object.assign({}, this.state.user);
    user[key] = value.trim();
    this.setState({ user });
  };

  handleSignIn = () => {
    const user = Object.assign({}, this.state.user);
    if (user.userName === '' || user.password === '') return Alert.alert('Sign in error', 'Empty username or password');
    if (user.userName.toLowerCase() !== 'user' || user.password.toLowerCase() !== 'password') return Alert.alert('Sign in error', 'Wrong credentials.');
    pushTrackListScreen();
  };

  render() {
    return (
      <View>
        <Button title="de" onPress={() => (i18n.changeLanguage('de'))} />
        <Button title="en" onPress={() => (i18n.changeLanguage('en'))} />
        <SignIn
          onChange={this.handleChangeInput}
          handleSignIn={this.handleSignIn}
          errSignIn={this.props.errSignIn}
        />
      </View>
    );
  }
}

export default withNamespaces()(AuthScreen);
