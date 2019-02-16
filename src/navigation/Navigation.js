import { Navigation } from 'react-native-navigation';

import { AUTH_SCREEN, WELCOME_SCREEN, TRACKLIST_SCREEN } from './Screens';
import registerScreens from './registerScreens';

registerScreens();

export function pushWelcomeScreen() {

  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: 'orange'
      },
      title: {
        color: 'white',
        test: 'home'
      },
      backButton: {
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      visible: false
    },
    layout: {
      orientation: ['portrait']
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        id: 'MAIN_NAVIGATION_STACK',
        children: [{
          component: {
            name: WELCOME_SCREEN
          }
        }]
      }
    }
  });
}

export function pushAuthScreen() {
  Navigation.push('MAIN_NAVIGATION_STACK', {
    component: {
      name: AUTH_SCREEN
    }
  });
}

export function pushTrackListScreen() {
  Navigation.push('MAIN_NAVIGATION_STACK', {
    component: {
      name: TRACKLIST_SCREEN
    }
  });
}
