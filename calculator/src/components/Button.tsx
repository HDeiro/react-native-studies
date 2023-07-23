import React from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

type PropsType = {
  label: string | number;
  onClick: (event: GestureResponderEvent) => void;
};

const buttonSize = Dimensions.get('window').width / 4;
const styles = StyleSheet.create({
  Button: {
    fontSize: 40,
    height: buttonSize,
    width: buttonSize,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});

const Button = ({onClick, label}: PropsType) => (
  <TouchableHighlight onPress={onClick}>
    <Text style={styles.Button}>{label}</Text>
  </TouchableHighlight>
);

export default Button;
