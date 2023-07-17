import React from 'react';
import {FlatList, Text} from 'react-native';
import products from '../data/products.json';

export default () => (
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
);
