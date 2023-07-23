import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import basicCalcData from './data/basic-calc.json';
import Button from './components/Button';

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        {calcDataRef.current.map(({label}) => (
          <Button
            key={`calc-action-${label}`}
            label={label}
            onClick={() => console.log('aaaa')}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
