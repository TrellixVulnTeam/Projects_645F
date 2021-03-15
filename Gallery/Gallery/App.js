import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SQLite from 'react-native-sqlite-storage';

import Takephoto from './src/screens/Takephoto';


import 'react-native-gesture-handler';

const Stack = createStackNavigator();

var FONT_BACK_LABEL   = 16;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}


class HomeScreen extends React.Component{

  constructor(props){
    super(props);


    var db = SQLite.openDatabase(
      {
        name:'Gallery.db',
        createFromLocation:'~www/Gallery.db'
      },
      () => {console.log("başarılı");},
      error => {
        console.log(error);
      }
    );

    this.state = {
      activeFoot: 0,
      db,
    }


  }


  componentDidMount(){

    const {db} = this.state;
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Categories',[], (tx,results) =>{
        console.log(results.rows.items(0).id);
      });
    })

  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor="red" />

        {/* Footer Oluşturma */}


        <View style={styles.footer}>
          <TouchableOpacity style={this.state.activeFoot === 0 ? styles.activeFootStyle : styles.insideFooter}
            onPress={() => {this.setState({activeFoot:0})}}
          >
            <Text style={styles.footerText}>Resim Çek</Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.state.activeFoot === 1 ? styles.activeFootStyle : styles.insideFooter}
            onPress={() => {this.setState({activeFoot:1})}}
          >
            <Text style={styles.footerText}>Tüm Resimler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.state.activeFoot === 2 ? styles.activeFootStyle : styles.insideFooter}
            onPress={() => {this.setState({activeFoot:2})}}
          >
            <Text style={styles.footerText}>Kategoriler</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Oluşturma */}

        <View
          style={{flex:1}}
        >

        {this.state.activeFoot === 0 && <Takephoto /> }

        </View>

      </View>
    );
  }

};



class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Galeri" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  footer:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightgreen',
  },
  insideFooter:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'rgba(125,234,123,0.5)'

  },
  footerText: {
    fontSize: FONT_BACK_LABEL,
    fontWeight:'bold',
    padding:10,
  },
  activeFootStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'rgba(125,234,123,0.5)',
    backgroundColor:'turquoise',
  }

});

export default App;
