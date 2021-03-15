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
  BackHandler,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCheckCircle, faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';

import Feather from 'react-native-vector-icons/Feather'
import Antdesign from 'react-native-vector-icons/AntDesign'

import { CheckBox } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../../utils/Constants';

import Header from '../../components/difheader';
import {NetworkContext} from '../../components/context';

import {setrandevu} from '../../../actions';



class Tamamlandi extends Component{

  static contextType = NetworkContext;

  constructor(props){
    super(props);

    this.state = {
      username: "",
      saat:this.props.route.params.hour,
      date:this.props.route.params.date,
      masano: this.props.route.params.masano,
      kat:this.props.route.params.kat,
    }
  }


  backAction = () => {
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }


  done = () => {
    this.props.navigation.navigate("Marker");
  }



  render(){
    var splithour = this.state.saat.split("-")

    return(

      <ScrollView style={styles.container}>
        <Header height={100} text={"TAMAMLANDI"} screenName={"Tamamlandi"} />

        <View style={{marginLeft:'8%',marginRight:'8%', alignItems:'center', justifyContent:'center', marginTop:50}}>

          <View style={{height:70, width:70, borderRadius:40, backgroundColor:'#00366e', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:28, color:'#fff', fontWeight:'bold'}}>{this.state.kat}.</Text>
          </View>

          <Text style={{fontSize:16, color:'#00366e', fontWeight:'bold', marginTop:5}}>KAT</Text>

        </View>


        <View style={{margin:'8%', alignItems:'center'}}>
          <View style={[styles.items]}>
            <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#00366e', marginLeft:5, borderRadius:50, width:50, height:50}}>
              <Image source={require('../../../images/table.png')} style={{width:30, height:30, resizeMode:'stretch'}}/>
            </View>

            <View style={{alignItems:'center', justifyContent:'center', flex:4}}>
              <Text style={{color:'#36608c'}}>Masa no: {this.state.masano}</Text>
            </View>
          </View>


          <View style={[styles.items]}>
            <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#00366e', marginLeft:5, borderRadius:50, width:50, height:50}}>
              <Image source={require('../../../images/saat.png')} style={{width:30, height:30, resizeMode:'stretch'}}/>
            </View>

            <View style={{alignItems:'center', justifyContent:'center', flex:4}}>
              <Text style={{color:'#36608c'}}>{this.state.date}</Text>
              <Text style={{color:'#36608c'}}>{this.state.saat}</Text>
            </View>
          </View>


          <View style={{width:'80%', marginTop:20, flexDirection:'row', alignItems:'center'}}>
            <View style={{padding:5, alignItems:'center'}}>
              <Antdesign name="checkcircle" size={25} color={'#41db9a'} />
            </View>

            <View style={{flex:1, marginLeft:10}}>
              <Text style={{fontSize:18, color:'#41db9a', fontWeight:'bold'}}>Başarı ile rezerve edilmiştir</Text>
            </View>

          </View>



          <TouchableOpacity
            style={[styles.items, {backgroundColor:'#41db9a', width:'90%', marginTop:20}]}
            onPress={this.done}
          >
            <Text style={{color:'#fff',fontSize:16, fontWeight:'bold'}}>BİTTİ</Text>
          </TouchableOpacity>


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
    width:'70%',
    marginTop:10,
    height:70,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    alignItems:'center',
    elevation: 2,
  }

});



const mapStateToProps = state => ({randevu: state.randevu})

const mapDispatchToProps = () => {
  return {
    setrandevu,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Tamamlandi)
