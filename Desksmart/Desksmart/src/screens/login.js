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
  Alert,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCheckCircle, faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';



import { CheckBox } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient';
import Constants from '../utils/Constants';



class LoginScreen extends Component{

  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      checked: false,

    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }


  /*
    Username Text Change
  */

  handleChangeUsername = (v) => {
    this.setState({
      username: v,
    })
  }

  /*
    Password Change
  */

  handleChangePassword = (v) => {
    this.setState({
      password: v,
    })
  }


  /* Async data store */
  storeData = async () => {

    const {username, password, checked} = this.state;

    try {
      await AsyncStorage.setItem('@username', username);
      await AsyncStorage.setItem('@password', password);
      await AsyncStorage.setItem('@checked', checked.toString());

    } catch (e) {
      // saving error
    }
  }


  /* Login kontrol */
  control = () => {
    const {username, password} = this.state;

    if(username === "" || username.length < 6){
      Alert.alert("Kullanıcı adı 6 karakteden küçük, 20 karakterden büyük olamaz");
    }else if (password.length < 6) {
      Alert.alert("Şifre en az 8, en fazla 16 karakter olmalıdır");
    }else {
      this.storeData();
      this.props.navigation.navigate("Footer");
    }
  }


  render(){

    return(

      <View
        style={styles.container}
        >
        <LinearGradient colors={['#0162c6', '#0454a7', '#09417b']} style={styles.linearGradient}>

        <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
        <KeyboardAvoidingView
          style={{flex:1}}
          behaviour= "padding"
          keyboardVerticalOffset={30}
        >



          <View style={{flex:1, marginTop:5}}>
            <View style={{alignItems:'center', justifyContent:'center', flex:3}}>
              <Image
                source={require('../images/11alogin.png')}
                style={styles.image}
              />
            </View>

            <View style={{flex:1, alignItems:'center'}}>
              <Text style={[styles.infoText,{fontWeight:'bold'}]}>Hoşgeldin</Text>
              <Text style={styles.infoText}>Sisteme Giriş Yaparak</Text>
              <Text style={styles.infoText}>Yararlanabilirsin</Text>
            </View>
          </View>



          <View style={{flex:1, alignItems:'center'}}>
            <TextInput
              value={this.state.username}
              onChangeText={this.handleChangeUsername}
              style={[styles.input]}
              placeholder= "Kullanıcı Adı"
              maxLength={20}
            />

            <TextInput
              value={this.state.password}
              onChangeText={this.handleChangePassword}
              style={[styles.input]}
              placeholder= "Şifre"
              secureTextEntry={true}
              maxLength={16}
            />



            <View style={{flexDirection:'row', marginTop:20, width:'90%', height:50, justifyContent:'center'}}>
              <View style={{flex:1, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                <View>
                  <CheckBox
                    checkedIcon={<FontAwesomeIcon icon={faCheckCircle} color={'#fff'} size={20} />}
                    uncheckedIcon={<FontAwesomeIcon icon={faCircle} color={'#fff'} size={20} />}
                    checked={this.state.checked}
                    onPress={() => this.setState({checked: !this.state.checked})}
                  />
                </View>
                <View style={{flex:1}}><Text style={styles.rememberText}>Beni Hatırla</Text></View>
              </View>

              <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.rememberText}>Şifremi Unuttum?</Text>
              </View>
            </View>




            <TouchableOpacity
              style={{width:'90%', backgroundColor:'#41db9a', height:50, alignItems:'center', justifyContent:'center', borderRadius:80, flexDirection:'row', marginTop:20, marginBottom:5}}
              onPress={this.control}
            >
                <Text style={{fontSize:16, color:'#fff', fontWeight:'bold', flex:1, textAlign:'center'}}>GİRİŞ YAP</Text>
                <FontAwesomeIcon icon={faChevronCircleRight} color={'#fff'} size={25} style={{marginRight:10}} />
            </TouchableOpacity>


          </View>

        </KeyboardAvoidingView>
                  </ScrollView>
        </LinearGradient>
      </View>

    );
  }
}







/*



<View style={{flex:1, marginTop:5}}>
  <View style={{alignItems:'center', justifyContent:'center', flex:3}}>
    <Image
      source={require('../images/desksmart.png')}
      style={styles.image}
    />
  </View>

  <View style={{flex:1, alignItems:'center'}}>
    <Text style={[styles.infoText,{fontWeight:'bold'}]}>Hoşgeldin</Text>
    <Text style={styles.infoText}>Sisteme Giriş Yaparak</Text>
    <Text style={styles.infoText}>Yararlanabilirsin</Text>
  </View>
</View>



<View style={{flex:1, alignItems:'center'}}>
  <TextInput
    value={this.state.username}
    onChangeText={this.handleChangeUsername}
    style={[styles.input]}
    placeholder= "Kullanıcı Adı"
    maxLength={20}
  />

  <TextInput
    value={this.state.password}
    onChangeText={this.handleChangePassword}
    style={[styles.input]}
    placeholder= "Şifre"
    secureTextEntry={true}
    maxLength={16}
  />



  <View style={{flexDirection:'row', marginTop:20, width:'90%', height:50, justifyContent:'center'}}>
    <View style={{flex:1, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
      <View>
        <CheckBox
          checkedIcon={<FontAwesomeIcon icon={faCheckCircle} color={'#fff'} size={20} />}
          uncheckedIcon={<FontAwesomeIcon icon={faCircle} color={'#fff'} size={20} />}
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />
      </View>
      <View style={{flex:1}}><Text style={styles.rememberText}>Beni Hatırla</Text></View>
    </View>

    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.rememberText}>Şifremi Unuttum?</Text>
    </View>
  </View>




  <TouchableOpacity
    style={{width:'90%', backgroundColor:'#41db9a', height:50, alignItems:'center', justifyContent:'center', borderRadius:80, flexDirection:'row', marginTop:20, marginBottom:5}}
    onPress={this.control}
  >
      <Text style={{fontSize:16, color:'#fff', fontWeight:'bold', flex:1, textAlign:'center'}}>GİRİŞ YAP</Text>
      <FontAwesomeIcon icon={faChevronCircleRight} color={'#fff'} size={25} style={{marginRight:10}} />
  </TouchableOpacity>


</View>

*/


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  linearGradient: {
    flex: 1,
  },
  image: {
    width:Constants.MAX_WIDTH/3,
    height:Constants.MAX_WIDTH/3,
    resizeMode:'stretch',
  },
  infoText:{
    color:'#fff'
  },
  input: {
    backgroundColor:'#fff',
    width:'90%',
    borderRadius: 80,
    textAlign:'center',
    marginTop: 10,

  },
  rememberText:{
    color:'#fff',
    fontSize:12,
  }

});

export default LoginScreen;
