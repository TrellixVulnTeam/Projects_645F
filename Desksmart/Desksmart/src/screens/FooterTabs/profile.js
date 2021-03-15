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
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCheckCircle, faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';



import { CheckBox } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../utils/Constants';

import Header from '../components/header';




class Profile extends Component{

  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      checked: false,
      floors: [1,2,3,4,5,6],
      activefloor:0,

    }
  }

  render(){

    return(
      <View style={styles.container}>
        <Text>aaa</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
container: {
    flex:1,
  },

});



const mapStateToProps = state => ({})

const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Profile)
