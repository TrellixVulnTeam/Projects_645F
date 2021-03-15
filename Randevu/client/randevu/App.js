/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,  DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


import HomeScreen from './src/user/home';
import SettingsScreen from './src/user/settings';

import LoginScreen from './src/login';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function RouterScreen(){
    return(
        <Tab.Navigator
          screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                        return <AntDesign name="home" size={size} color={color} />;
                      } else if (route.name === 'Settings') {
                        return <Feather name="settings" size={size} color={color} />;
                      }

                      // You can return any component that you like here!

                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                  }}

        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Ana Sayfa' }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Ayarlar' }} />

        </Tab.Navigator>
    );
}



function CustomDrawerContent(props) {
  return (
    <ScrollView contentContainerStyle={{flex:1, flexDirection:'column', justifyContent:'space-between'}}>

      <View style={{flex:1}}>
        <DrawerItemList {...props} />
      </View>

      <TouchableOpacity style={{height:50, backgroundColor:'red', margin:5, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const Drawer = createDrawerNavigator();

function DrawerScreen(){

  return(
    <Drawer.Navigator
      drawerContent = {(props) => <CustomDrawerContent {...props}/>}
    >
      <Drawer.Screen name="Router" component={RouterScreen} options={{ tabBarLabel: 'Kullanıcı' }} />
    </Drawer.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>

      <StatusBar backgroundColor="#338a25"/>

      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none"
        >
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  logoutText:{
    fontSize:16,
    fontWeight:'bold',
    color:'#ffffff'
  }

})


export default App;
