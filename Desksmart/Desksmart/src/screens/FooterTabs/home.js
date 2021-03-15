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
  BackHandler
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCheckCircle, faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';


import {connect} from 'react-redux';

import {setkat} from '../../actions';

import { CheckBox } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../utils/Constants';

import Header from '../components/header';



class Home extends Component{

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

  componentDidMount(){
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }


  componentWillUnmount() {
    this.backHandler.remove();
  }

  backAction = () => {
    BackHandler.exitApp();
    return true;
  };



  selectKat = (v) => {
    this.props.setkat(v);
    this.props.navigation.navigate("Marker",{no:v})
  }

  render(){


    return(

      <ScrollView style={styles.container}>

        <Header height={200} />

        <View style={styles.body}>

          {/*Katlar Listelendi*/}
          <View style={{marginLeft:'8%'}}>
            <Text style={{color: "#2667ab", fontWeight:'bold'}}>KATLAR</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {this.state.floors.map((v,k) => {
                var left=0;
                var right=0
                if(v!==1){
                  left=10;
                }

                if(v === 6){
                  right=10;
                }

                return(
                  <TouchableOpacity style={{width:110, height:130, marginLeft:left, marginRight:right, zIndex:100}} key={k}
                  onPress={()=>this.selectKat(v)}
                  >
                    <LinearGradient
                      start={{x: 0.1, y: 0.1}}
                      colors={['#5798d9', '#97bee7','#ebeef2' ]}
                      style={styles.linearGradient}>

                      <View style={{width:50, height:50, backgroundColor:'#fff', borderRadius:25, alignItems:'center', justifyContent:'center'}}>
                        <Text style={[styles.text, {color:'#469ef8'}]}>{v}.</Text>
                      </View>

                      <Text style={[styles.text, {color:'#fff', marginTop:10, fontSize:16}]}>KAT</Text>

                    </LinearGradient>
                  </TouchableOpacity>
                );

              })}
            </ScrollView>
          </View>


          {/* 1. Kat verileri girilecek */}

          <View style={{marginLeft:'8%', marginTop:20}}>

            {/* 1. Kat Header */}
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <View style={{flex:1}}>
                <Text style={{color: "#2667ab", fontWeight:'bold'}}>BİRİNCİ KAT</Text>
              </View>

              <View style={{flex:1, alignItems:'flex-end', marginRight:'5%'}}>
                <Text style={{color: "#2667ab"}}>35 ALAN BOŞTA</Text>
              </View>
            </View>
            {/* 1. Kat Header */}


            {/* 1. Kat Body */}
            <View style={styles.firstFloor}>
              <TouchableOpacity style={styles.firstFloorData}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                  <Text style={[styles.text,{fontSize:14,color:'#fff'}]}>Uygun Masalar</Text>
                  <Image source={require('../../images/table.png')} style={styles.images}/>
                </View>

                <View style={styles.border}>
                  <Text style={[styles.text, {fontSize:16, color:'#fff'}]}>25 MASA BOŞ</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.firstFloorData, {marginLeft:'5%'}]}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                  <Text style={[styles.text,{fontSize:14,color:'#fff'}]}>Uygun Odalar</Text>
                  <Image source={require('../../images/door.png')} style={styles.images}/>
                </View>

                <View style={styles.border}>
                  <Text style={[styles.text, {fontSize:16, color:'#fff'}]}>5 ODA BOŞ</Text>
                </View>
              </TouchableOpacity>

            </View>
            {/* 1. Kat Body */}

          </View>

          {/* 1. Kat verileri girilecek */}

        </View>


      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({

  body: {
    flex:1,
    marginTop:20,
  },
  container: {
    flex:1,
  },
  horizontalScroll:{
    paddingTop:10,
  },
  linearGradient:{
    flex:1,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  },
  firstFloor: {
    marginTop:20,
    flexDirection:'row',

  },
  firstFloorData:{
    width: ((Constants.MAX_WIDTH-Constants.MAX_WIDTH*0.1)/2)*0.9,
    height:180,
    borderRadius:20,
    backgroundColor:'#05519f',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20
  },
  images:{
    width:50,
    height:50,
    resizeMode:'stretch',
    marginTop:20
  },
  border:{
    padding:10,
    backgroundColor:'#3edb99',
    width:'100%',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    alignItems:'center'
  }

});



const mapStateToProps = state => ({width: state.width})

const mapDispatchToProps = () => {
  return {
    setkat,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Home)
