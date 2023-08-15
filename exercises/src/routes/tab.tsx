import React from 'react';
import MainView from '../views/MainView';
import SecondView from '../views/SecondView';
import ThirdView from '../views/ThirdView';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="/main"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarLabelStyle: {
        fontSize: 30,
      },
    }}>
    <Tab.Screen
      name="/main"
      options={{tabBarLabel: '1'}}
      component={MainView}
    />
    <Tab.Screen
      name="/second"
      options={{tabBarLabel: '2'}}
      component={SecondView}
    />
    <Tab.Screen
      name="/third"
      options={{tabBarLabel: '3'}}
      component={ThirdView}
    />
  </Tab.Navigator>
);
