/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
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
  Alert
} from 'react-native';

import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

class App extends Component{
  constructor(props){
    super(props);



    this.state = {
      data: [],
      coordinates: [],
    }
  }

  componentDidMount(){
    this.getType();
  }

  getType = (async) =>{
    fetch('http://192.168.1.105:8080/Users/users')
    .then((response) => response.json())
    .then((response) =>{
        this.setState({
          data: response
        });
    });
  }




  /*

           <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor = "red"
            />

            <Marker
             coordinate = {{latitude:37.866667, longitude: 32.483333}}
            />



            {deger.map((deger, k) => {
              return(
                <MapViewDirections
                   key={k}
                   origin={deger.origi}
                   destination={deger.dest}
                   apikey={GOOGLE_MAPS_APIKEY}
                   strokeWidth={3}
                   strokeColor = "red"
                 />
              )
            })}
  */

  onMapPress = (e) => {

    let coordinate = this.state.coordinates;

    console.log(e.nativeEvent.coordinate.latitude);
    console.log(e.nativeEvent.coordinate.longitude);

    coordinate.push({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude
    })

    this.setState({
      coordinates: coordinate,
    })
  }


  onMarkerPress = (e) => {
    let latitude = e.nativeEvent.coordinate.latitude;
    let longitude = e.nativeEvent.coordinate.longitude

    let coordinates = this.state.coordinates;
    let lengthCoordinates = coordinates.length;

    let newCoordinate = [];

    for(let i = 0; i < lengthCoordinates; i++){
      if(coordinates[i].latitude === latitude && coordinates[i].longitude === longitude){

      }else {
        newCoordinate.push({
          latitude: coordinates[i].latitude,
          longitude: coordinates[i].longitude
        })
      }
    }

    this.setState({
      coordinates: newCoordinate,
    })
  }


  onDirection = () => {
    console.log("Yönlendirme");
    const GOOGLE_MAPS_APIKEY = "AIzaSyAiGPexg2XJbDHwtbiWkgrqtU0lWJNELWI" ;
    let coordinates = this.state.coordinates;
    let output = [];
    let count = 0;

    //Marklar arasındaki yol
    for(let i = 0 ; i < this.state.coordinates.length-1; i++ ){
      let tempItem = (
        <MapViewDirections
          key = {count}
           origin={{latitude: coordinates[i].latitude, longitude: coordinates[i].longitude}}
           destination={{latitude: coordinates[i+1].latitude, longitude: coordinates[i+1].longitude}}
           apikey={GOOGLE_MAPS_APIKEY}
           strokeWidth={3}
           strokeColor = "red"
         />
      )

      output[count] = tempItem;
      count ++;
    }

    //İlk Noktaya geri dönme
    if(this.state.coordinates.length > 2){
      let tempItem = (
        <MapViewDirections
          key = {count}
           origin={{latitude: coordinates[this.state.coordinates.length-1].latitude, longitude: coordinates[this.state.coordinates.length-1].longitude}}
           destination={{latitude: coordinates[0].latitude, longitude: coordinates[0].longitude}}
           apikey={GOOGLE_MAPS_APIKEY}
           strokeWidth={3}
           strokeColor = "red"
         />
      )

      output[count] = tempItem;
      count ++;
    }

    return ( <View>

        {output}

      </View>)
  }


  onSave = (async) =>{
    console.log("kaydet");
    var url = 'http://192.168.1.105:8080/Register/register/';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(this.state.coordinates), // data can be `string` or {object}!
      //body: data.toString(),

      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    //.then(response => console.log('Success:', JSON.stringify(response)))
    .then(response => {

      const deger = response.valueOf('mesaj')
      console.log(deger);
      if (deger.mesaj === "1") {
        Alert.alert("Başarılı")
      }else {
        Alert.alert("Başarısız")
      }

    })
    .catch(error => console.error('Hata:', error));
  }


  render(){
    const length = this.state.coordinates.length;
    console.log(length);
    console.log("data = " + this.state.data);



    return(
        <View style={{flex:1}}>

          <View style={styles.header}>

              <TouchableOpacity
                style={{height:30,width:100, backgroundColor:'#10c2b3', alignItems:'center', justifyContent:'center'}}
                onPress={this.onSave.bind(this)}
              >
                <Text style={{fontWeight:'bold'}}>KAYDET</Text>
              </TouchableOpacity>

          </View>

        <View style={{flex:1}}>
           <MapView
             style={styles.map}
             initialRegion={{
                latitude: 37.866667,
                longitude: 32.483333,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress = {this.onMapPress}
              >

              {this.state.coordinates.map((mark,i) => {
                return(
                  <Marker
                    key = {i}
                    coordinate = {mark}
                    onPress = {this.onMarkerPress}
                  />
                )
              })}


              { length >= 1 ?

                this.onDirection()

                :

                null

              }


             <StatusBar hidden={true} />

           </MapView>
         </View>

         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
   },
   map: {
     ...StyleSheet.absoluteFillObject,
   },

   header:{
     height: 50,
     backgroundColor:'#54f44b',
     alignItems:'center',
     justifyContent:'center'
   }
});

export default App;
