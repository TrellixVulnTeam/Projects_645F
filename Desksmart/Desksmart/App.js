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
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from './src/utils/Constants';
import AsyncStorage from '@react-native-community/async-storage';

import {createStore} from 'redux';
import allReducers from './src/reducers';
import {Provider} from 'react-redux';


import LoginScreen from './src/screens/login';
import FooterScreen from './src/screens/footer';

const Stack = createStackNavigator();

const mystore = createStore(
  allReducers,
);


//Giriş Ekranı Oluşturuldu
class GirisScreen extends Component{

  constructor(props){
    super(props);

    this.asynckontrol = false;
  }
  componentDidMount(){
    this.time = setTimeout(this.control, 5000);
    this.getStore();
  }

  //AsyncStorage'da depolanmış veriler
  getStore = async () => {
    try {
      const checked = await AsyncStorage.getItem('@checked')
      if(checked !== null) {
        // value previously stored
        if(checked === "true")
        this.asynckontrol = true;
      }
    } catch(e) {
      // error reading value
    }
  }

  //Beni hatırla tıklanmış mı kontrolü yapıldı

  control = () => {
    /*
      Veritabanı kullanılmış olsaydı gelen bu veriler login ekranında tekrardan veritabanında kontrol edilmeliydi
      Veritabanı olmadığı için direkt olarak yönlendirme yaptım.
    */

    if(this.asynckontrol === true){
      this.props.navigation.navigate("Footer")
    }else {
      this.props.navigation.navigate("Login")
    }
  }

  render(){
    return(

        <View style={styles.container}>

          <ImageBackground
            source={require('./src/images/background.png')}
            style={styles.image}
            resizeMode='cover'
          >

            <View style={{flex:1, backgroundColor:'rgba(255,255,255,0.9)', alignItems:'center', justifyContent:'center'}}>
              <Image
                source={require('./src/images/desksmart.png')}
                style={{width:Constants.MAX_WIDTH/2, height:Constants.MAX_WIDTH/2}}
              >

              </Image>

              <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
                <Text style={{fontSize:Constants.MAX_WIDTH/320*16, color:'#17487c', fontWeight:'bold'}}>Desk Booking</Text>
                <Text style={{fontSize:Constants.MAX_WIDTH/320*16, color:'#17487c', fontWeight:'bold'}}>Solution</Text>
              </View>
            </View>

          </ImageBackground>
        </View>

    );
  }
}



//Ana Navigasyonlar burada yapıldı. Tab navigator ve nesting navigation işlemleri footer sayfasında

class App extends Component{
  render(){
    return(
      <Provider store={mystore}>

        <NavigationContainer>
          <StatusBar hidden={true}/>
          <Stack.Navigator

            initialRouteName="Giris"
            headerMode="none"
          >
            <Stack.Screen name="Giris" component={GirisScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Footer" component={FooterScreen} />

          </Stack.Navigator>
        </NavigationContainer>

      </Provider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    width:Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
    resizeMode:'stretch',
    backgroundColor:'rgba(0,0,0,0.1)'
  }
});

export default App;
