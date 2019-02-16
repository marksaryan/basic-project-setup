import { FETCH_DATA_SUCCESS } from './actions';

export const DEFAULT = {
  selectedTrack: null,
  tracks: []
};

export default function audios(state = DEFAULT, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
}
