/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Header from '../utils/header.js';

class Home extends Component{

  constructor(props){
    super(props);

  }

  render(){
    const {navigation} = this.props;

    return(
      <View style={styles.container}>
        <Header title="Ana Sayfa"/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,

  }
});

export default Home;
