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

import Constants from '../../utils/Constants';


class Table extends Component{

  constructor(props){
    super(props);

    this.state = {
      widthKroki:this.props.width,
      heightKroki:this.props.width,
      top: this.props.top,
      left:this.props.left,
      masano: this.props.no,
      durum: this.props.state,
    }


  }



  selected = () => {
    var no = this.state.masano;
    var durum = this.state.durum;
    this.props.selectedTable(no, durum);
  }



  render(){

    const {widthKroki, heightKroki, top, left} = this.state;

    var topvalue = heightKroki*top;
    var leftvalue = widthKroki*left;



    if(widthKroki < 300){
      var width = 6;
      var height = 12;
      var chairwidth=2;
      var chairheight=4;
    }else {
      var chairwidth=3;
      var chairheight=5;
      var width = 8;
      var height = 16;
    }


    var icon=[];

    if(this.state.durum === "empty"){
      if(this.props.direction === "left"){
        icon[0] = (
          <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:chairwidth, height:chairheight, backgroundColor:'#41db9a'}}></View>
            <View style={{width:width, height:height, backgroundColor:'#41db9a'}}></View>
          </View>
        )
      }else if (this.props.direction === "right") {
        icon[0] = (
          <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:width, height:height, backgroundColor:'#41db9a'}}></View>
            <View style={{width:chairwidth, height:chairheight, backgroundColor:'#41db9a'}}></View>
          </View>
        )

      }else if (this.props.direction === "bottom") {
        icon[0] = (
          <View style={{ flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:height, height:width, backgroundColor:'#41db9a'}}></View>
            <View style={{width:chairheight, height:chairwidth, backgroundColor:'#41db9a'}}></View>
          </View>
        )
      }else if (this.props.direction === "top") {

        icon[0] = (
          <View style={{ flexDirection:'column', alignItems:'center'}}>
            <View style={{width:chairheight, height:chairwidth, backgroundColor:'#41db9a'}}></View>
            <View style={{width:height, height:width, backgroundColor:'#41db9a'}}></View>
          </View>
        )
      }
    }else {
      if(this.props.direction === "left"){
        icon[0] = (
          <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:chairwidth, height:chairheight, backgroundColor:'red'}}></View>
            <View style={{width:width, height:height, backgroundColor:'red'}}></View>
          </View>
        )
      }else if (this.props.direction === "right") {
        icon[0] = (
          <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:width, height:height, backgroundColor:'red'}}></View>
            <View style={{width:chairwidth, height:chairheight, backgroundColor:'red'}}></View>
          </View>
        )

      }else if (this.props.direction === "bottom") {
        icon[0] = (
          <View style={{ flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:height, height:width, backgroundColor:'red'}}></View>
            <View style={{width:chairheight, height:chairwidth, backgroundColor:'red'}}></View>
          </View>
        )
      }else if (this.props.direction === "top") {

        icon[0] = (
          <View style={{ flexDirection:'column', alignItems:'center'}}>
            <View style={{width:chairheight, height:chairwidth, backgroundColor:'red'}}></View>
            <View style={{width:height, height:width, backgroundColor:'red'}}></View>
          </View>
        )
      }
    }






    return(

      <TouchableOpacity style={{position:'absolute', top: topvalue, left:leftvalue}}
        onPress={this.selected}
      >
        {icon}
      </TouchableOpacity>

    );
  }
}


const styles = StyleSheet.create({

  container:{
    flex:1,
  }

});

export default Table;
