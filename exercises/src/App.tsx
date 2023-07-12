import React from 'react';
import {SafeAreaView, Platform} from 'react-native';
import {Title} from './components/Title';

export default () => (
  <SafeAreaView>
    {(() => {
      switch (Platform.OS) {
        case 'android':
          return <Title content="App running in Android" />;
        case 'ios':
          return <Title content="App running in iOS" />;
        default:
          return <Title content="App running in an Unknown Platform" />;
      }
    })()}
  </SafeAreaView>
);
