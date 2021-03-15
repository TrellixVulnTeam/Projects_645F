import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from '../screens/Home';
import CihazScreen from '../screens/Cihazekrani';
import 'react-native-gesture-handler';

function Navigation() {

  console.log("Navigasyon işlemi")

  return (
    <NavigationContainer>
      <Stack.Navigator
          headerMode = "none"
          initialRouteName= "Home"
      >
        <Stack.Screen name="Cihazekrani" component={CihazScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;