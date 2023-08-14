import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainView from '../views/MainView';
import SecondView from '../views/SecondView';
import ThirdView from '../views/ThirdView';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="MainView">
    <Stack.Screen
      name="/main"
      options={{title: 'Main View'}}
      component={MainView}
    />
    <Stack.Screen
      name="/second"
      options={{title: 'Second View'}}
      component={SecondView}
    />
    <Stack.Screen
      name="/third"
      options={{title: 'Third View'}}
      component={ThirdView}
    />
  </Stack.Navigator>
);
