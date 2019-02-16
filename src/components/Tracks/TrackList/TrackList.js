import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import TrackListItem from './TrackListItem';

const trackList = props => {
  return(
    <FlatList
      style={styles.listContainer}
      renderItem={(info) => (
        <TrackListItem
          trackName={info.item.name}
          trackImage={info.item.image}
          onItemTouched={() => props.onItemTouched(info.item.key)}
        />
      )}
      data={props.tracks}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default trackList;
