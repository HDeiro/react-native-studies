import React, {useMemo} from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

type PropsType = {
  label: string | number;
  type: string;
  spaceSlot: number;
  onClick: (event: GestureResponderEvent) => void;
};

const buttonSizeUnit = Dimensions.get('window').width / 4;
const styles = StyleSheet.create({
  Button: {
    fontSize: 40,
    lineHeight: buttonSizeUnit,
    height: buttonSizeUnit,
    width: buttonSizeUnit,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  ButtonForMathOperation: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  ButtonDouble: {
    width: buttonSizeUnit * 2,
  },
  ButtonTriple: {
    width: buttonSizeUnit * 3,
  },
});

const Button = ({onClick, label, type, spaceSlot}: PropsType) => {
  const stylesToApply = useMemo(() => {
    const stylesToBeApplied = [];
    stylesToBeApplied.push(styles.Button);

    if (type === 'MathOperation') {
      stylesToBeApplied.push(styles.ButtonForMathOperation);
    }

    if (spaceSlot === 2) {
      stylesToBeApplied.push(styles.ButtonDouble);
    } else if (spaceSlot === 3) {
      stylesToBeApplied.push(styles.ButtonTriple);
    }

    return stylesToBeApplied;
  }, [type, spaceSlot]);

  return (
    <TouchableHighlight onPress={onClick}>
      <Text style={stylesToApply}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;
