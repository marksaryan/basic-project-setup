import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { pushAuthScreen, pushTrackModalScreen } from 'AppNavigator';
import { TrackList } from '../../components/Tracks/TrackList';
import { connectData } from '../../redux';


class TrackListScreen extends PureComponent {
  render() {
    console.log('New data', this.props);
    return (
      <View>
        <Button title="Logout" onPress={() => pushAuthScreen()} />
        <Text>TrackList Page</Text>
        <TrackList
          tracks={this.props.data.tracks}
        />
        <Button title="Go to Modal" onPress={() => pushTrackModalScreen()} />
      </View>
    );
  }
}

export default connectData()(TrackListScreen);
