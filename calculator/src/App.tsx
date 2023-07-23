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
  const [displayValue, updateDisplayValue] = useState('0');
  const [operation, setOperation] = useState<string | null>(null);
  const [values, setValues] = useState<number[]>([0, 0]);
  const [currentValuePointer, setCurrentValuePointer] = useState(0);

  const clearMemory = () => {
    setOperation(null);
    updateDisplayValue('0');
    setValues([0, 0]);
    setCurrentValuePointer(0);
  };

  const executeFunctionalOperation = (functionalOperation: string | number) => {
    switch (functionalOperation) {
      case 'AC':
        clearMemory();
        break;
    }
  };

  const executeMathOperation = (mathOperation: string | number) => {
    switch (mathOperation) {
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
        const isSeparator = operationOrOperand === '.';

        // Sanitizes operand 1, cleaning when there is a leading 0
        const parsedOperand1 = displayValue === '0' ? '' : displayValue;
        // Sanitizes operand 2, cleaning when adding another separator when the first one already exists (ex: 2.3334. is invalid)
        const parsedOperand2 =
          isSeparator && displayValue.includes('.') ? '' : operationOrOperand;

        // Gets new display value to be updated on states
        const newDisplayValue = parsedOperand1 + parsedOperand2;

        updateDisplayValue(newDisplayValue);

        // If that wasn't a separator operation, then logic for values should be refreshed
        if (!isSeparator) {
          const floatValue = parseFloat(newDisplayValue);
          const newValues = [...values];
          newValues[currentValuePointer] = floatValue;
          setValues(newValues);
        }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
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
