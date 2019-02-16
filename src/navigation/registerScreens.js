import React from 'react';
import { Navigation } from 'react-native-navigation';

import { AuthScreen, WelcomeScreen, TrackListScreen } from 'AppScreens';
import { Provider } from 'AppRedux';

import { AUTH_SCREEN, WELCOME_SCREEN, TRACKLIST_SCREEN } from './Screens';
import Amplify from 'aws-amplify';
import config from '../configs';

Amplify.configure(config.aws);

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(WELCOME_SCREEN, () => WrappedComponent(WelcomeScreen));
  Navigation.registerComponent(AUTH_SCREEN, () => WrappedComponent(AuthScreen));
  Navigation.registerComponent(TRACKLIST_SCREEN, () => WrappedComponent(TrackListScreen));
  // add additional screens here
  console.info('All screens have been registered...');
}
