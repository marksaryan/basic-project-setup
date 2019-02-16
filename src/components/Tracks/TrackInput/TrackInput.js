import React, { Component } from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

class TrackInput extends Component {
  state = {
    trackName: ''
  }

  trackNameChangedHandler = value => {
    this.setState({trackName: value});
  };

  trackSubmitHandler = () => {
    if (this.state.trackName.trim() === "") {
      return;
    }
    this.props.onTrackAdded(this.state.trackName);
  };

  render() {
    return (
      <View style={styles.trackContainer}>
        <TextInput
          style={styles.trackInput}
          value={this.state.trackName}
          placeholder="New track name"
          onChangeText={this.trackNameChangedHandler}
        />
        <Button
          style={styles.trackButton}
          title="Add"
          onPress={this.trackSubmitHandler}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  trackContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  trackInput: {
    width: "70%"
  },
  trackButton: {
    width: "30%"
  }
});

export default TrackInput;
