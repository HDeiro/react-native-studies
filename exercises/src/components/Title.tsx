import React from 'react';
import {Text, StyleSheet} from 'react-native';

type PropsType = {
  content: string;
};

export const Styles = StyleSheet.create({
  Title: {
    fontWeight: '600',
    fontSize: 32,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export const Title = ({content}: PropsType) => {
  return <Text style={Styles.Title}>{content}</Text>;
};
