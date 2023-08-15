import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import Stack from './stack';
import Tab from './tab';

const style = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});

export default () => {
  return (
    <SafeAreaView style={style.SafeAreaView}>
      <NavigationContainer>
        {/* <Stack /> */}
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
  );
};
