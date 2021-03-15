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
  StatusBar
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCheckCircle, faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../utils/Constants';

import Header from '../components/difheader';

import Table from '../components/table';


const imagewidth = Constants.MAX_WIDTH-(Constants.MAX_WIDTH*0.17);
const imageheight = Constants.MAX_WIDTH-(Constants.MAX_WIDTH*0.1);


class Marker extends Component{



  constructor(props){
    super(props);
    this.state = {
      chooseHour: false,
      chooseDate: false,
      date:"",
      hour:"",
      scroll:true,
    }
  }


  //Seçilen tarih
  onChange = (e, selectedDate) => {
    var date = moment(selectedDate).format("DD.MM.YYYY");

    this.setState({
      date: date,
      chooseDate: false,
    })
  }


  //Masa tıklama durumu. Asıl işlem bir sonraki sayfada yapıldı
  selectedTable = (no, durum) => {

  }


  //Saat seçimi
  saat = (saat) => {
    console.log(saat);
    this.setState({
      chooseHour: false,
      hour:saat,
      scroll:true,
    })
  }


  //Saat seçimi yaparken iptal tuşu
  cancel = () => {
    console.log("cancel");

    this.setState({
      chooseHour:false,
      scroll: true,
    })
  }

  //Header sayfasından geri tuşu tıklama kontrolü
  back = () => {
    this.props.navigation.goBack();
  }


  render(){
    var data = this.props.tables[0].bilgiler;

    /*
    <NetworkContext.Consumer>
      {(props)=> {
        return(<Text>{props.no}</Text>);
      }}
    </NetworkContext.Consumer>
    */

    return(

        <ScrollView scrollEnabled={this.state.scroll} style={styles.container}>

          <Header height={100} text={"BOŞ MASA ARA"} screenName={"Marker"} back={this.back} />

          {/*Gün ve tarih seçme butonları*/}

          <View style={{marginLeft:'10%', alignItems:'center', justifyContent:'center', marginTop:20, marginRight:'10%'}}>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity
              onPress={()=>this.setState({chooseDate:true})}
                style={{width:'30%', flex:1, alignItems:'center',justifyContent:'center', backgroundColor:'#05519f', marginRight:5, height:50, borderRadius:50}}
              >
                <Text style={{color:'#fff'}}>GÜN SEÇ</Text>
                {this.state.date !== "" ?
                  <Text style={{color:'#fff'}}>{this.state.date}</Text>
                  :
                  null
                }
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>this.setState({chooseHour:true, scroll:false})}
                style={{width:'30%', flex:1, alignItems:'center',justifyContent:'center', backgroundColor:'#05519f', marginLeft:5, height:50, borderRadius:50}}
              >

                <Text style={{color:'#fff'}}>SAAT SEÇ</Text>

                {this.state.hour !== "" ?
                  <Text style={{color:'#fff'}}>{this.state.hour}</Text>
                  :
                  null
                }
              </TouchableOpacity>
            </View>

            {/*Boş masa ara butonu*/}

            <TouchableOpacity
              style={{width:'50%', backgroundColor:'#41db9a', height:50, alignItems:'center', justifyContent:'center', borderRadius:80, flexDirection:'row', marginTop:20}}
              onPress={()=>this.props.navigation.navigate({name:"Masa", params:{screen:"Marker", date:this.state.date, hour:this.state.hour}})}
            >
                <Text style={{fontSize:12, color:'#fff', fontWeight:'bold', flex:1, textAlign:'center'}}>BOŞ MASA ARA</Text>
                <FontAwesomeIcon icon={faChevronCircleRight} color={'#fff'} size={25} style={{marginRight:10}} />
            </TouchableOpacity>

          </View>


          {/* Kroki ve butonlar */}

          <View style={{alignItems:'center',flex:1}}>

              <ImageBackground
                source={require('../../images/kroki1.png')}
                style={{width:imagewidth, height:imageheight,resizeMode:'stretch', marginTop:20}}
              >

              {data.map((value,k) => {
                return(
                  <Table width={imagewidth} height={imageheight} top={value.top} left={value.left} direction={value.direction} no={value.masano} key={k} state="empty" selectedTable={this.selectedTable}/>
                )
              })}

              </ImageBackground>

          </View>


          {/*Tarih seç butonu tıklandığında*/}

          {this.state.chooseDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              is24Hour={true}
              display="default"
              locale="tr-TR"
              dateFormat="DD-MM-YYYY"
              minimumDate={new Date()}
              onChange={this.onChange}
            />
          )}

          {/*Saat seç butonu tıklandığında*/}

          {this.state.chooseHour && (
            <View style={{position:'absolute', left:0, top:0, width:'100%', height:'100%'}}>
              <View style={{position:'absolute', left:Constants.MAX_WIDTH*0.2, top:Constants.MAX_HEIGHT*0.2, width:Constants.MAX_WIDTH*0.6, height:Constants.MAX_HEIGHT*0.6, backgroundColor:'#41db9a', flexDirection:'column', zIndex:100}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>

                  {this.props.hours.map((v,k) => {

                    return(

                        <TouchableOpacity style={{width:'100%', height:50, alignItems:'center', justifyContent:'center', borderBottomWidth:1}} key={k}
                          onPress={()=> this.saat(v[k])}
                        >
                          <Text style={{fontSize:16, color:'#fff'}}>{v[k]}</Text>
                        </TouchableOpacity>

                    );
                  })}


                </ScrollView>

                <TouchableOpacity style={{width:'100%', height:50, alignItems:'center', justifyContent:'center', borderTopWidth:2, backgroundColor:'#00366e'}}
                  onPress={this.cancel}
                >
                  <Text style={{fontSize:16, color:'#fff', fontWeight:'bold'}}>İPTAL</Text>
                </TouchableOpacity>

              </View>
            </View>
          )}


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


const mapStateToProps = state => ({tables: state.tables, hours: state.hours})

const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Marker)
