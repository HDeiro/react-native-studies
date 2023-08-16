import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  View: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  Button: {
    alignSelf: 'stretch',
  },
});

const Component1 = props => {
  return (
    <View style={styles.View}>
      <Button
        style={styles.Button}
        title="Open Drawer"
        onPress={() => props.navigation.openDrawer()}
      />
      <Button
        style={styles.Button}
        title="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </View>
  );
};

const Component2 = () => {
  return <Text>COMPONENT 2</Text>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Component1" component={Component1} />
        <Drawer.Screen name="Component2" component={Component2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
