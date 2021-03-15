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
  ImageBackground,
  StatusBar,
  Alert,
  PixelRatio
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCheckCircle, faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


import Constants from '../../../utils/Constants';

import Header from '../../components/difheader';
import Table from '../../components/table';


const imagewidth = Constants.MAX_WIDTH-(Constants.MAX_WIDTH*0.17);
const imageheight = Constants.MAX_WIDTH-(Constants.MAX_WIDTH*0.1);

var FONT_SIZE = 16;
if(PixelRatio.get() <= 2){
  console.log(PixelRatio.get());
  FONT_SIZE = 14;
}



class Masa extends Component{

  constructor(props){
    super(props);



    this.state = {

      hour: this.props.route.params.hour,
      date: this.props.route.params.date,
      bos:null,
      durum: "MÜSAİT",
    }

    var masano = 60;
    this.ref = new Array(60);
  }

  componentDidMount() {

    //Focus olma kısmı rezervasyon yapılırken ana sayfaya geçip farklı bir kat seçtiği zaman
    //uygulamada verilerin karışmaması için tekrar saat ve tarih seçme ekranına dönülmesi için eklendi

    this.deger = this.props.katno;
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      console.log("focus");

      if(this.deger !== this.props.katno){
        this.props.navigation.navigate("Marker")
      }
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }





  kontrol = () => {
    if(this.state.bos !== null && this.state.durum === "MÜSAİT"){
      this.props.navigation.navigate("Rezervasyon", {hour: this.state.hour, date: this.state.date, masano: this.state.bos})
    }else {
      Alert.alert("Lütfen uygun bir masa seçiniz!")
    }
  }


  //Table props
  selectedTable = (no, durum) => {
    if(durum === "empty"){
      this.setState({
        bos: no,
        durum: "MÜSAİT",
      })
    }else {
      this.setState({
        bos: no,
        durum: "DOLU",
      })
    }
  }



  renderTable = () => {
    console.log("render table");


    var data = this.props.tables[0].bilgiler;

    var masa=[];
    var bosmasa;
    this.props.randevu.map((v) =>{
      if(v.kat === this.props.katno && v.saat === this.state.hour && v.tarih === this.state.date){
        masa.push(v.masano)
      }
      bosmasa = v.kat;
    })// randevu map

    var output = [];

    {data.map((value,k) => {
      var deger;
      var kontrol = 0;
      for(let i=0; i<masa.length;i++){
        if(value.masano === masa[i]){
          kontrol = 1;
        }
      }

      if(kontrol === 0){
        deger = (
          <Table width={imagewidth} height={imageheight} top={value.top} left={value.left} direction={value.direction} no={value.masano} key={k} state="empty" ref={this.ref[k]} selectedTable={this.selectedTable} color="green"/>
        );

      }else {
        deger = (
            <Table width={imagewidth} height={imageheight} top={value.top} left={value.left} direction={value.direction} no={value.masano} key={k} state="fill" ref={this.ref[k]} selectedTable={this.selectedTable} color="red"/>
        );
      }

      output[k] = deger
    })}//data map

    return output;
  }



  back = () => {
    console.log("Back press");
    this.props.navigation.goBack();
  }



  render(){

    var data = this.renderTable();


    return(

      <ScrollView style={styles.container}>

        <Header height={100} text={"MASA"} screenName={"Masa"} back={this.back} hour={this.state.hour} />

        <View style={{alignItems:'center', marginTop:10}}>
        <ReactNativeZoomableView
          zoomEnabled={true}
          maxZoom={1.2}
          minZoom={0.9}
          zoomStep={0.25}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          style={{
            flex:1,
            width: imagewidth,
            height: imageheight,
            padding:30,
            alignItems:'center',
            justifyContent:'center'
          }}
          >
            <ImageBackground
              source={require('../../../images/kroki1.png')}
              style={{width:imagewidth, height:imageheight,resizeMode:'stretch', marginTop:20, padding:20}}
            >

              {data}

            </ImageBackground>
          </ReactNativeZoomableView>
        </View>

        <View style={{marginTop:20, flexDirection:'row', marginLeft:'8%', marginRight:'8%', marginBottom:'8%'}}>
          <View
            style={{flex:1,width:'40%', backgroundColor:'#41db9a', height:50, alignItems:'center', justifyContent:'center', borderRadius:80, flexDirection:'row', marginTop:20, marginRight:5}}
            onPress={()=>this.props.navigation.navigate({name:"Masa", params:{screen:"Marker", date:this.state.data, hour:"17:00-17:30"}})}
          >
            {this.state.bos !== null ?
              <Text style={{fontSize:FONT_SIZE, color:'#fff', fontWeight:'bold', flex:1, textAlign:'center'}}>MASA {this.state.bos} {this.state.durum}</Text>
              :
              <Text style={{fontSize:FONT_SIZE, color:'#fff', fontWeight:'bold', flex:1, textAlign:'center'}}></Text>
            }


          </View>

          <TouchableOpacity
            style={{flex:1,width:'40%', backgroundColor:'#41db9a', height:50, alignItems:'center', justifyContent:'center', borderRadius:80, flexDirection:'row', marginTop:20, marginLeft:5}}
            onPress={this.kontrol}
          >
              <Text style={{fontSize:FONT_SIZE, color:'#fff', fontWeight:'bold', flex:1, textAlign:'center'}}>OTUR</Text>
              <FontAwesomeIcon icon={faChevronCircleRight} color={'#fff'} size={25} style={{marginRight:10}} />
          </TouchableOpacity>
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



});


const mapStateToProps = state => ({tables: state.tables, randevu: state.randevu, katno: state.kat})

const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Masa)
