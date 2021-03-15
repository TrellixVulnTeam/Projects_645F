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

import Feather from 'react-native-vector-icons/Feather'

import { CheckBox } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../utils/Constants';

import Header from '../components/difheader';




class Appointment extends Component{

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


  back = () => {
    this.props.navigation.goBack();
  }


  render(){


    return(

      <ScrollView style={styles.container}>
        <Header height={100} text={"SON REZERVASYONLAR"} screenName={"Appointment"} back={this.back} />

        <View style={{margin:'8%'}}>
        {this.props.appointment.map((v,k)=>{
          return(

            <View style={[styles.items]} key={k}>

              <View style={styles.floorBorder}>
                <Text style={{fontSize:24, color:'#fff', fontWeight:'bold'}}>{v.kat}.</Text>
                <Text style={{fontSize:10, color:'#fff', fontWeight:'bold'}}>KAT</Text>
              </View>

              <View style={{alignItems:'center', justifyContent:'center', flex:3}}>
                <Text style={{color:'#36608c'}}>MASA NO: {v.masano}</Text>
              </View>

              <View style={styles.dateBorder}>
                <View style={{marginLeft:3, alignItems:'center', justifyContent:'center'}}>
                  <Image source={require('../../images/saat.png')} style={{width:27, height:27, borderRadius:15, resizeMode:'stretch'}}/>
                </View>

                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:7, color:'#fff'}}>{v.tarih}</Text>
                  <Text style={{fontSize:7, color:'#fff', fontWeight:'bold'}}>{v.saat}</Text>
                </View>
              </View>
            </View>

          );
        })}
        </View>

      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'#fff',
  },
  items:{
    width:'100%',
    marginTop:10,
    height:60,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    alignItems:'center',
    shadowColor:'gray',
    elevation: 1,
  },
  floorBorder: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    backgroundColor:'#3edb99',
    width:50,
    height:50,
    marginLeft:5
  },
  dateBorder:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:5,
    flex:2,
    height:35,
    width:'100%',
    borderRadius:50,
    backgroundColor:'#00366e',
    flexDirection:'row',
  }

});



const mapStateToProps = state => ({appointment: state.oldapp})

const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Appointment)
