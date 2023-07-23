import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type PropsType = {
  value: string | number;
};

const styles = StyleSheet.create({
  Display: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, .6)',
    alignItems: 'flex-end',
  },
  DisplayValue: {
    fontSize: 60,
    color: '#fff',
  },
});

const Display = ({value}: PropsType) => {
  return (
    <View style={styles.Display}>
      <Text style={styles.DisplayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

export default Display;
