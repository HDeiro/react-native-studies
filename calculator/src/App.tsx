import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import basicCalcData from './data/basic-calc.json';
import Button from './components/Button';
import Display from './components/Display';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const App = () => {
  const calcDataRef = useRef(basicCalcData);
  const [value, updateValue] = useState('0');

  const clearMemory = () => {
    updateValue('0');
  };

  const executeFunctionalOperation = (operation: string | number) => {
    switch (operation) {
      case 'AC':
        clearMemory();
        break;
    }
  };

  const executeMathOperation = (operation: string | number) => {
    switch (operation) {
      case 'AC':
        clearMemory();
        break;
    }
  };

  const executeOperation = (
    operationOrOperand: string | number,
    type: string,
  ) => {
    switch (type) {
      case 'FunctionalOperation':
        executeFunctionalOperation(operationOrOperand);
        break;
      case 'MathOperation':
        executeMathOperation(operationOrOperand);
        break;
      default:
        const operand = String(operationOrOperand);
        updateValue(operand);
        console.log('numeric', operand);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display value={value} />
      <View style={styles.buttonContainer}>
        {calcDataRef.current.map(({label, type, spaceSlot}) => (
          <Button
            key={`calc-action-${label}`}
            label={label}
            spaceSlot={spaceSlot}
            type={type}
            onClick={() => executeOperation(label, type)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
