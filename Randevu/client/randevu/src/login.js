/*
*Kullanıcı ve şirkete ait login tasarımları tamamen burada yapıldı
*Register için kendi içlerinde farklı sayfalara yönlendirildiler
*/

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import validator from 'validator';

import Header from './utils/header.js';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { getUrl } from './utils/url.js';

class Login extends Component{

  constructor(props){
    super(props);

    this.state = {
      selected: 0,
      loginMail:"",
      loginPassword:"",
      checkedLogin: false,
    }
  }

  changeSelected = () => {

    if(this.state.selected === 1){
      this.setState({
        selected:0,
      })
    }else {
      this.setState({
        selected:1
      })
    }
  }

  /*
  *
  * User Change
  *
  */
  onChangeMail = (v) => {
    this.setState({
      loginMail: v,
    })
  }

  onChangePassword = (v) => {
    this.setState({
      loginPassword: v,
    })
  }



  /*
  *
  * User Login
  *
  */
  userLogin = async () => {

    const {loginMail, loginPassword} = this.state;
    if(loginMail.length > 5 && loginMail.length < 62 && loginPassword.length > 5 && loginPassword.length < 17 && validator.isEmail(loginMail)===true){
      var url = getUrl()+"user/login/";
      var formdata = new FormData();
      console.log(url);

      console.log(this.state.loginMail);
      console.log(this.state.loginPassword);

      formdata.append("mail", this.state.loginMail);
      formdata.append("password", this.state.loginPassword);


      await fetch(url, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formdata)
      }).then(response => response.json())
      .then(response => {
        console.log(response);
      }).catch(error => console.log("Hata: " + error))
    }else {
      Alert.alert("Mail veya Şifreniz Hatalı!!!")
    }



  }

  /*
  *
  * Company Login
  *
  */
  companyLogin = async () => {

  }

  /*
  *
  *Kullanıcı Formu
  *
  */

  user(){
    return(
      <View style={{alignItems:'center'}}>


        <View style={{width:'90%'}}>
          <TextInput
            style={{borderWidth:2, color:'#ffffff'}}
            value={this.state.loginMail}
            onChangeText={this.onChangeMail}
            placeholder=" Mail Adresiniz"
            placeholderTextColor='#abff7d'
            selectionColor={"white"}
          />
        </View>

        <View style={{width:'90%', marginTop:5}}>
          <TextInput
            style={{borderWidth:2, color:'#ffffff'}}
            value={this.state.loginPassword}
            onChangeText={this.onChangePassword}
            placeholder=" Şifreniz"
            placeholderTextColor='#abff7d'
            selectionColor={"white"}
          />
        </View>

        <View style={{flexDirection:'row', width:'90%', marginTop:5}}>
          <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity
              onPress={()=>this.setState({checkedLogin:!this.state.checkedLogin})}
            >
              {this.state.checkedLogin === false ?
                <Fontisto name="checkbox-passive" size={20}/>
                :
                <Fontisto name="checkbox-active" size={20}/>
              }

            </TouchableOpacity>
            <View style={{marginLeft:5}}>
              <Text>Beni Hatırla</Text>
            </View>
          </View>

          <View style={{alignItems:'flex-end', justifyContent:'center', flex:1}}>
            <Text style={{textDecorationLine:'underline'}}>Şifremi Unuttum</Text>
          </View>
        </View>

        <View style={{width:'90%', alignItems:'flex-end'}}>
          <TouchableOpacity
            style={{backgroundColor:'red', borderRadius:20, marginTop:10}}
            onPress={this.userLogin}
          >
            <Text style={styles.text}>GİRİŞ YAP</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  /*
  *
  *Şirket Formu
  *
  */

  company(){

  }


  render(){
    const {navigation} = this.props;

    return(
      <LinearGradient colors={['#abff7d', '#8bd364','#338a25']} style={styles.container}>
        <Header title="Giriş Yap"/>

        <View style={{flex:1,flexDirection:'column', marginTop:'5%', marginLeft:'10%', marginRight:'10%',marginBottom:'10%', justifyContent:'center', backgroundColor:'#338a25', borderRadius:20}}>
          <View style={{alignItems:'flex-end', borderBottomWidth:1}}>
            <TouchableOpacity
              style={{backgroundColor:'red', borderRadius:20, margin:5}}
              onPress={this.changeSelected}
            >
              {this.state.selected === 0 ?
                <Text style={styles.text}>Şirket</Text>
                :
                <Text style={styles.text}>Kullanıcı</Text>
              }

            </TouchableOpacity>
          </View>

          <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>

            <View style={{alignItems:'center', marginTop:5}}>
              {this.state.selected === 0 ?
                <Text style={{fontWeight:'bold', color:'#ffffff'}}>KULLANICI GİRİŞİ</Text>
                :
                <Text style={{fontWeight:'bold', color:'#ffffff'}}>ŞİRKET GİRİŞİ</Text>
              }

              <Text style={[styles.text,{padding:10}]}>Mail ve şifreniz ile giriş yapabilirsiniz</Text>
            </View>

            {this.state.selected === 0 ?
              <View style={{margin:5}} >
                {this.user()}
              </View>
              :
              <View style={{margin:5}}>
                {this.company()}
              </View>

            }

          </ScrollView>
        </View>

      </LinearGradient>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  text:{
    color:'#ffffff',
    padding:20,
    fontWeight:'bold'
  }
});

export default Login;
