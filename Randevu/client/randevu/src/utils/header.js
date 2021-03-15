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
  PixelRatio,
} from 'react-native';

import PropTypes from 'prop-types';
import Constants from './constants';

const HEADER_HEIGHT = Constants.MAX_HEIGHT*10/100;

var fontSize = 18;

if(PixelRatio.get() > 1){
  fontSize = 20;
}


class Header extends Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={[styles.text,{fontSize: fontSize}]}>{this.props.title}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  title : PropTypes.string,
};



const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    backgroundColor:'#338a25',
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  text: {
    fontWeight:'bold',
    color:'#ffffff'
  }

});

export default Header;
