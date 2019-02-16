import React from 'react';
import {Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const trackDetails  = props => {
  let modalContent = null;

  if (props.selectedTrack) {
    modalContent = (
      <View>
        <Image source={props.selectedTrack.image} style={styles.trackImage}/>
        <Text style={styles.trackName}>{props.selectedTrack.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedTrack !== null} animationType="slide" onRequestClose={props.onModalClosed}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="close" style={styles.closeButton} onPress={props.onModalClosed}/>
          <TouchableOpacity onPress={props.onTrackDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 40
  },
  trackImage: {
    width: '100%',
    height: 400
  },
  trackName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
  closeButton: {
    marginBottom: 20
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default trackDetails;
