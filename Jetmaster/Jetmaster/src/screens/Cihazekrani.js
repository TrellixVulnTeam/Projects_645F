import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import Header from '../components/header';
import {Constants} from '../utils/constants';
import UpDisplay from '../components/displays/updisplay';
import DownDisplay from '../components/displays/downdisplay';
import Buttons from '../components/buttons';
import Logo from '../components/logo';

class Cihazekrani extends React.Component{
	constructor(props){
		super(props);

		console.log("Cihaz Ekranı");
	}


	render(){
		
		return(
			<View style={styles.container}>
				<Header />
				<View style={styles.contentBorder}>
					<View style={styles.contextBorder}>
						<UpDisplay />
						<DownDisplay />
						<Buttons />
						<Logo />

						<View style={styles.ceContainer}>
							<Image 
								source={require('../assets/logo/CE.png')}

							/>
						</View>

					</View>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#000000',
		zIndex:1,
	},
	contentBorder: {
		flex:1,
		margin: '4%',
		backgroundColor:'#ffffff',
	},
	contextBorder: {
		flex:1,
		margin: '2%',
		backgroundColor:'#000000',
		alignItems:'center'
	},
	ceContainer: {
		position:'absolute',
		bottom: 5,
		right: 5,
	}

})

export default Cihazekrani;