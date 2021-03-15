import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar, Animated, ScrollView, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WIDTH = Dimensions.get("window").width;

const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 200;

class Login extends Component{
  constructor(props){
    super(props);

    this.animate = new Animated.Value(0);
     this.array = [];
  }




  UNSAFE_componentWillMount() {
    for (var i = 1; i <= 75; i++) {
      this.array.push(i);
    }
  }


  //colors={['#192f6a','#3b5998','#4c669f', '#3b5998', '#192f6a']}

  render(){

    const headerHeight = this.animate.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });

    const textSize = this.animate.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [90, 30],
        extrapolate: 'clamp'
      }
    )


    return(
      <View style={styles.container}>

        <Animated.View style={[styles.login, {height: headerHeight}]}>
          <LinearGradient colors={['#737373','#d4cccd','#d4cccd','#737373']} style={styles.linearGradient}>
            <StatusBar hidden={true} />
            <Animated.Text style={[styles.loginText,{fontSize:textSize}]}>LOGIN</Animated.Text>
          </LinearGradient>
        </Animated.View>

        <ScrollView
         scrollEventThrottle={16}
         onScroll={Animated.event(
           [{ nativeEvent: { contentOffset: { y: this.animate } } }]
         )}>

         {
            this.array.map((item, key) =>
              (
                <View key={key} style={styles.item}>
                  <Text style={styles.itemText}>Row No : {item}</Text>
                </View>
              ))
          }


       </ScrollView>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  login:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText:{
    fontWeight:'bold',
    fontFamily: 'cursive'
  },
  body:{
    flex:7,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems:'center',
    justifyContent:'center',
    width: WIDTH,
  },
  animatedHeaderContainer: {
  position: 'absolute',
  top: (Platform.OS == 'ios') ? 20 : 0,
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
},
headerText: {
  color: 'white',
  fontSize: 22
},
item: {
  backgroundColor: '#ff9e80',
  margin: 8,
  height: 45,
  justifyContent: 'center',
  alignItems: 'center'
},
itemText: {
  color: 'black',
  fontSize: 16
}
})


export default Login;
