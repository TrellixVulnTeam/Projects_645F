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
  TouchableWithoutFeedBack,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHome,faChevronCircleRight, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Antdesign from 'react-native-vector-icons/AntDesign'

import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';

import Constants from '../../utils/Constants';



class Header extends Component{

  constructor(props){
    super(props);




    this.state = {
      activefoot: 0,
      height: this.props.height,
      text: this.props.text,
    }
  }


  back = () => {
    this.props.back();
  }



  render(){

    if(this.props.screenName === "Masa"){
      var saat = this.props.hour.split("-");
      saat = saat[0];
      return(

        <View style={[styles.border, {height:this.props.height}]}>

          <TouchableOpacity style={{alignItems:'center', position:'absolute', left:20}}
            onPress={this.back}
          >
            <Antdesign name="left" size={25} color={'#fff'} style={{marginTop:10}} />
          </TouchableOpacity>
          <View style={{flex:5,alignItems:'center'}}>
              <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={{position:'absolute',alignItems:'center', right:20, flexDirection:'row'}}>
              <Feather name="clock" size={25} color='#fff' style={{paddingTop:10}}  />
              <Text style={styles.text}>{saat}</Text>
          </View>

        </View>

      );
    }else if (this.props.screenName === "Rezervasyon") {
      return(
        <View style={[styles.border, {height:this.props.height}]}>

          <View style={{alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <View style={{width:40, height:40, borderRadius:50, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                <Text style={{color:'#00366e', fontSize:20, fontWeight:'bold'}}>{this.props.kat}.</Text>
              </View>
              <Text style={[styles.text,{marginLeft:5, marginTop:0}]}>KAT</Text>
            </View>
              <Text style={styles.text}>{this.state.text}</Text>
          </View>

        </View>
      );

    }else if (this.props.screenName === "Tamamlandi") {
      return(
        <View style={[styles.border, {height:this.props.height}]}>

          <Text style={styles.text}>{this.props.text}</Text>

        </View>
      );

    }else {
      return(

        <View style={[styles.border, {height:this.props.height}]}>

          <TouchableOpacity style={{alignItems:'center', position:'absolute', left:20}}
            onPress={this.back}
          >
            <Antdesign name="left" size={25} color={'#fff'} style={{marginTop:10}} />
          </TouchableOpacity>
          <View style={{flex:5,alignItems:'center'}}>
              <Text style={styles.text}>{this.state.text}</Text>
          </View>

        </View>

      );
    }


  }
}


const styles = StyleSheet.create({


  border:{
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00366e',
    flexDirection:'row',

  },

  text: {
    marginTop:10,
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  },

});

export default Header;
