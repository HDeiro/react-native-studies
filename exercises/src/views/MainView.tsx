import React from 'react';
import {SafeAreaView, Platform} from 'react-native';
import {Title} from '../components/Title';
import ProductList from '../components/ProductList';

const MainView = () => (
  <SafeAreaView>
    {/* OS Detection Example */}
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

    {/* FlatList Example */}
    <ProductList />
  </SafeAreaView>
);

export default MainView;
