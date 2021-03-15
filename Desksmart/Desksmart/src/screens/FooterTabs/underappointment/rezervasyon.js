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
  PixelRatio,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCheckCircle, faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';

import Feather from 'react-native-vector-icons/Feather'

import { CheckBox } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../../utils/Constants';

import Header from '../../components/difheader';

import {setrandevu} from '../../../actions';

var FONT_SIZE = 13;
if(PixelRatio.get() <= 2){
  console.log(PixelRatio.get());
  FONT_SIZE = 10;
}



class Rezervasyon extends Component{



  constructor(props){
    super(props);

    this.state = {
      username: "",
      saat:this.props.route.params.hour,
      date:this.props.route.params.date,
      masano: this.props.route.params.masano,
      kat:null,
    }
  }

  componentDidMount(){

    this.deger = this.props.kat;
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      console.log("focus");

      if(this.deger !== this.props.kat){
        this.props.navigation.navigate("Marker")
      }
    });

    this.getStore();
    this.setState({
        kat: this.props.kat,
    })
  }


  componentWillUnmount() {
    this._unsubscribe();
  }



  getStore = async () => {
    try {
      const username = await AsyncStorage.getItem('@username')
      if(username !== null) {
        this.setState({
          username: username,
        })
      }
    } catch(e) {
      // error reading value
    }
  }



  rezervasyonOlustur = () => {

    //NOT:  Çok kullanıcı varken ve rezervasyon yapılacağında, birisinin benden önce aynı yeri alıp almadığı kontrol edilmeli.

    var data = this.props.randevu;
    console.log(data);
    //{kat: 4, masano:9, tarih:date, saat:"14:30-15:00"},
    var uzunluk = data.length;
    data[uzunluk] = {kat: this.state.kat, masano: this.state.masano, tarih: this.state.date, saat:this.state.saat }
    this.props.setrandevu(data);


    this.props.navigation.navigate("Tamamlandi", {hour: this.state.saat, date: this.state.date, masano: this.state.masano, kat: this.state.kat})
  }



  render(){
    var splithour = this.state.saat.split("-")

    return(

      <ScrollView style={styles.container}>
        <Header height={100} text={"MASA REZARVASYON"} screenName={"Rezervasyon"} kat={this.state.kat} />

        <View style={{margin:'8%'}}>

            <View style={[styles.items]}>
              <View style={styles.content}>
                <Text style={styles.text}>Rezervasyon</Text>
              </View>

              <View style={[styles.content, {flex:4}]}>
                <Text style={[styles.text,{color:'#36608c'}]}>{this.state.username}</Text>
              </View>
            </View>


            <View style={[styles.items]}>
              <View style={styles.content}>
                <Text style={styles.text}>Lokasyon</Text>
              </View>

              <View style={[styles.content, {flex:4}]}>
                <Text style={[styles.text,{color:'#36608c'}]}>{this.state.kat}. kat, Masa no: {this.state.masano}</Text>
              </View>
            </View>


            <View style={[styles.items]}>
              <View style={styles.content}>
                <Text style={styles.text}>Grup</Text>
              </View>

              <View style={[styles.content, {flex:4}]}>
                <Text style={[styles.text,{color:'#36608c'}]}>Pazarlama</Text>
              </View>
            </View>

            <View style={[styles.items]}>
              <View style={styles.content}>
                <Text style={styles.text}>Tarih</Text>
              </View>

              <View style={[styles.content, {flex:4}]}>
                <Text style={[styles.text,{color:'#36608c'}]}>{this.state.date}</Text>
              </View>
            </View>



            <View style={{flexDirection:'row'}}>
              <View style={[styles.items, {width:'30%'}]}>
                <Text style={styles.text}>Saat</Text>
              </View>

              <View style={[styles.items, {width:'30%', marginLeft:'5%'}]}>
                <Text style={[styles.text,{color:'#36608c'}]}>{splithour[0]}</Text>
              </View>

              <View style={{alignItems:'center', justifyContent:'center', height:70, width:'5%', marginTop:10}}>
                <Text style={{color:'#36608c'}}>-</Text>
              </View>

              <View style={[styles.items, {width:'30%'}]}>
                <Text style={[styles.text,{color:'#36608c'}]}>{splithour[1]}</Text>
              </View>
            </View>


            <TouchableOpacity
              style={[styles.items, {backgroundColor:'#41db9a'}]}
              onPress={this.rezervasyonOlustur}
            >
              <Text style={{color:'#fff',fontSize: FONT_SIZE+2, fontWeight:'bold'}}>REZERVASYON YAP</Text>
            </TouchableOpacity>

        </View>

      </ScrollView>

    );
  }
}




  console.log(FONT_SIZE);

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'#fff',
  },
  items:{
    width:'100%',
    marginTop:10,
    height:70,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    alignItems:'center',
    elevation: 1,
  },
  text: {
    fontSize: FONT_SIZE,
    color:'#e6e6e6',
    fontWeight:'bold'
  },

  content:{
    alignItems:'center',
    justifyContent:'center',
    flex:2,
  }

});



const mapStateToProps = state => ({randevu: state.randevu, kat:state.kat})

const mapDispatchToProps = () => {
  return {
    setrandevu,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Rezervasyon)
