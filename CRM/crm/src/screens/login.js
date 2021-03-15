import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const Stack = createStackNavigator();

const Login: () => React$Node = () => {
  return (
    <View>
      <Text> Selamlar </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});

export default Login;
