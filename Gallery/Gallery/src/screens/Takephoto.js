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
  TextInput,
} from 'react-native';

import SQLite from 'react-native-sqlite-storage';


var FONT_BACK_LABEL   = 16;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}


class TakePhoto extends React.Component{

  constructor(props){
    super(props);


    this.state = {
      CategorieName : "",
    }

    this.categoryname = this.categoryname.bind(this);
  }


  AddCategory = () => {

  }

  categoryname = (v) => {
    this.setState({
      CategorieName: v,
    })
  }


  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>

        <View style={{width:'95%', marginTop:10, marginLeft:10}}>
          <Text style={styles.text}>Kategori Oluştur</Text>
          <TextInput
            style={{borderWidth:1, borderColor:'#000', marginTop:10, borderRadius:20}}
            placeholder="Kategori İsmi"
            maxLength={64}
            value={this.state.CategorieName}
            onChangeText = {(v) => this.categoryname(v)}
            >
          </TextInput>

          <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity
              style={{margin:10, padding:10, width:'20%', backgroundColor:'turquoise', alignItems:'center', borderRadius:10}}
            >
              <Text style={styles.text}>EKLE</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }

};



const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  text: {
    fontSize: FONT_BACK_LABEL,
    fontWeight:'bold',

  },


});

export default TakePhoto;
