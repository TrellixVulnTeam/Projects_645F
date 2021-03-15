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

import Fontisto from 'react-native-vector-icons/Fontisto';
import Antdesign from 'react-native-vector-icons/AntDesign'

import Constants from '../utils/Constants';

import Home from './FooterTabs/home';
import Marker from './FooterTabs/marker';
import Appointment from './FooterTabs/appointment';
import Profile from './FooterTabs/profile';

import Masa from './FooterTabs/underappointment/masa';
import Rezervasyon from './FooterTabs/underappointment/rezervasyon';
import Tamamlandi from './FooterTabs/underappointment/tamamlandi';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {NetworkContext} from './components/context';

const Tab = createBottomTabNavigator();
const MarkerStack = createStackNavigator();



//Bottom tab'da oluşturulan seçenekler kendi içerisinde navigasyon edilecek.
//Nesting Navigasyon işlemi burada ayarlandı
//Kat Anasayfada seçildiği için her sayfa içerisinde tek tek yönlendirme yerine react.context kullanıldı
//Ana Sayfa'dan kat seçilmeden direkt olarak marker ekranına gidilirse 1. kat default olarak atandı

function MarkerStackScreen(props) {
  var value;

  if(props.route.params !== undefined){
    value = {no:props.route.params.no}
  }else {
    value = {no:1};
  }


  return (
      <MarkerStack.Navigator
          headerMode="none"
          initialRouteName='Marker'

      >
        <MarkerStack.Screen name="Marker" component={Marker} />
        <MarkerStack.Screen name="Masa" component={Masa} />
        <MarkerStack.Screen name="Rezervasyon" component={Rezervasyon} />
        <MarkerStack.Screen name="Tamamlandi" component={Tamamlandi} />
      </MarkerStack.Navigator>
  );
}



//Sayfanın en altındaki bottom tab burada oluşturuldu

class FooterScreen extends Component{

  constructor(props){
    super(props);

  }

  render(){
    return(

      <Tab.Navigator

      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        if (route.name === 'Home') {
          return(
            <View style={styles.button}>
              <View style={styles.iconBorder}>
                  <Fontisto name="home" size={30} color={color} />
              </View>

              {focused === true ?
                <View style={[styles.footerBottom, {backgroundColor:'#0162c6'}]}></View>
                :
                <View style={[styles.footerBottom, {backgroundColor:'#fff'}]}></View>
              }

            </View>

          );
        } else if (route.name === 'Marker') {
          return(

            <View style={styles.button}>
              <View style={styles.iconBorder}>
                  <Fontisto name="map-marker-alt" size={30} color={color} />
              </View>
              {focused === true ?
                <View style={[styles.footerBottom, {backgroundColor:'#0162c6'}]}></View>
                :
                <View style={[styles.footerBottom, {backgroundColor:'#fff'}]}></View>
              }
            </View>
            );
        }else if (route.name==='Appointment') {
          return(

            <View style={styles.button}>
              <View style={styles.iconBorder}>
                  <Antdesign name="profile" color={color} size={30} />
              </View>
              {focused === true ?
                <View style={[styles.footerBottom, {backgroundColor:'#0162c6'}]}></View>
                :
                <View style={[styles.footerBottom, {backgroundColor:'#fff'}]}></View>
              }
            </View>
            );
        }else if (route.name==='Profile') {
          return(

            <View style={styles.button}>
              <View style={styles.iconBorder}>
                  <FontAwesomeIcon icon={faUserAlt} color={color} size={30} />
              </View>
              {focused === true ?
                <View style={[styles.footerBottom, {backgroundColor:'#0162c6'}]}></View>
                :
                <View style={[styles.footerBottom, {backgroundColor:'#fff'}]}></View>
              }
            </View>
            );
        }

      },
      })}
      tabBarOptions={{
      activeTintColor: '#0162c6',
      inactiveTintColor: '#c3daf1',
      showLabel: false,
      style: {
          height: Constants.MAX_HEIGHT/10,
        },
      }}
      >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Appointment" component={Appointment} />
        <Tab.Screen name="Marker" component={MarkerStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  footerBottom:{
    height:10,
    width:Constants.MAX_WIDTH/4*0.6,
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  button: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  iconBorder:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }


});

export default FooterScreen;
