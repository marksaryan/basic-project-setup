import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import i18n from '../../locales/i18n';
import { pushAuthScreen } from 'AppNavigator';

class TrackListScreen extends PureComponent<WithNamespaces> {
  state = {

  };

  render() {
    return (
      <View>
        <Button title="Logout" onPress={() => pushAuthScreen()}/>
        <Text>TrackList Page</Text>
      </View>
    );
  }
}

export default withNamespaces()(TrackListScreen);
