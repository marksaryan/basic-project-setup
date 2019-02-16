import React, { PureComponent } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

import { pushAuthScreen } from 'AppNavigator';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class WelcomeScreen extends PureComponent {

  render() {
    return (
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => pushAuthScreen()}>
          <Text>Click here to back to login page!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
