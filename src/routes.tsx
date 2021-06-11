import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from './screens/Home';
import Afya from './screens/Afya';
import Contact from './screens/Contact';


export default function Route(){
  return(
    <NavigationContainer>
      <Navigator
       screenOptions={{ 
        headerShown: false,
        cardStyle: { backgroundColor: '#e2e2'}
       }}
      >
        <Screen
          name="home"
          component={Home}
        />
        <Screen
          name="afya"
          component={Afya}
          options={{
            headerShown: true
          }}
        />
        <Screen
          name="contact"
          component={Contact}
          options={{
            headerShown: true
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}