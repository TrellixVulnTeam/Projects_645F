import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class UpDisplay extends React.Component{
	constructor(props){
		super(props);

		console.log("Home");
	}

	render(){
		return(
			<View style={styles.displayBorder}>
				<View style={styles.displayCells}><Text style={styles.displayText}>0</Text></View>
				<View style={styles.displayCells}><Text style={styles.displayText}>0</Text></View>
				<View style={styles.displayCells}><Text style={styles.displayText}>0</Text></View>
				<View style={styles.displayCells}><Text style={styles.displayText}>0</Text></View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	displayBorder: {
		marginTop: '4%',
		backgroundColor: 'red',
		width: '65%',
		height:'15%',
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row',
	},
	displayText: {
		fontSize:80,
		fontWeight:'bold',
		fontFamily:'BAUHAUSB',
	},
	displayCells: {
		flex:1,
		alignItems:'center'
	},
})

export default UpDisplay;