import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { pushAuthScreen } from 'AppNavigator';
import { TrackDetails } from '../../components/Tracks/TrackDetails';
import { connectData } from '../../redux';


class TrackModalScreen extends PureComponent {
  render() {
    return (
      <View>
        <Button title="Logout" onPress={() => pushAuthScreen()} />
        <Text>Track Modal Page</Text>
        <TrackDetails
          selectedTrack={this.props.data.selectedTrack}
        />
      </View>
    );
  }
}

export default connectData()(TrackModalScreen);
