import React from 'react';
import {SafeAreaView, Platform, FlatList, Text} from 'react-native';
import {Title} from './components/Title';
import products from './data/products.json';

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

    <FlatList
      data={products}
      keyExtractor={({id}) => `product-${id}`}
      renderItem={({item: {name, price}}) => {
        return (
          <Text>
            {name} (R${price})
          </Text>
        );
      }}
    />
  </SafeAreaView>
);
