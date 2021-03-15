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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';

import Constants from '../../utils/Constants';



class Header extends Component{

  constructor(props){
    super(props);


    var hours = new Date().getHours();
    var min = new Date().getMinutes();

    if(min >= 0 && min <10){
      var clock = hours.toString() + ":0" + min.toString();
    }else {
      var clock = hours.toString() + ":" + min.toString();
    }

    this.state = {
      activefoot: 0,
      foots: ["Anasayfa", "Randevular","Yer","Profil"],
      height: this.props.height,
      username:"",
      curTime: clock,
      avatar:"",
    }
  }

  componentDidMount(){

    this._interval = setInterval(() => {
      var hours = new Date().getHours();
      var min = new Date().getMinutes();

      if(min >= 0 && min <10){
        var clock = hours.toString() + ":0" + min.toString();
      }else {
        var clock = hours.toString() + ":" + min.toString();
      }



      this.setState({
        curTime: clock,
      })
    }, 1000);

    this.getStore()
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }



  getStore = async () => {
    console.log("getstore");
    try {
      const username = await AsyncStorage.getItem('@username')
      if(username !== null) {
        this.setState({
          username: username,
        })
      }
    } catch(e) {
      // error reading value
      console.log(e);
    }
  }


  selectImage = () => {

    ImagePicker.openPicker({
      width: 70,
      height: 70,
      cropping: true,
      cropperCircleOverlay: true
    }).then(image => {
      this.setState({
        avatar: image.path,
      })
    });


    ImagePicker.clean().then(() => {
      console.log('removed all tmp images from tmp directory');
    }).catch(e => {
      alert(e);
    });
  }





  render(){

    return(

      <View style={[styles.border, {height:this.props.height}]}>
        <LinearGradient colors={['#0162c6', '#0454a7', '#09417b']} style={styles.linearGradient}>
          <TouchableOpacity style={{backgroundColor:'#fff',width:70, height:70, borderRadius:35, alignItems:'center', justifyContent:'center'}}
            onPress={this.selectImage}
          >
            {this.state.avatar === "" ?
              <Image source={require('../../images/profil.png')} style={{width:70, height:70, borderRadius:100}}/>
              :
              <Image source={{uri: this.state.avatar}} style={{width:70, height:70, borderRadius:100}}/>
            }

          </TouchableOpacity>
          <Text style={styles.text}>{this.state.username}</Text>

          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{flex:1, alignItems:'flex-end',marginRight:2}}><Feather name="clock" size={30} color='#fff' style={{paddingTop:10}}  /></View>
            <View style={{flex:1, alignItems:'flex-start', marginLeft:2}}><Text style={[styles.text, {fontSize:20}]}>{this.state.curTime}</Text></View>
          </View>


          <TouchableOpacity style={styles.icon}>
            <MaterialIcons name="settings" size={30} color="#b0c6dd"/>
          </TouchableOpacity>

        </LinearGradient>
      </View>

    );
  }
}


const styles = StyleSheet.create({

  linearGradient: {
    flex:1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems:'center',
    justifyContent:'center',
  },

  border:{
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  text: {
    marginTop:10,
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  },

  icon: {
    position: 'absolute',
    top: 30,
    right:20
  }


});

export default Header;
