/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';

import SecondScreen from './Second';
import ThirdScreen from './Third';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class HomeScreen extends Component{
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen </Text>
        <Text>Selam</Text>
        <Button
          title="press me"
          onPress ={() => {this.props.navigation.navigate("Second")}}
        />
      </View>
    );
  }
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Second"
        headerMode="none"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>

      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}

export default App;
