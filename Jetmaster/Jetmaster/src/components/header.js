import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import Constants from '../utils/constants';
import Colors from '../utils/colors';

class Header extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.headerBorder}>
				<TouchableOpacity style={styles.backButton}>
					<View ><Text style={styles.headerText}>{'<'}</Text></View>			
				</TouchableOpacity>

				<View style={styles.headerView}><Text style={[styles.headerText, {fontSize:20}]}> Seri Numarası </Text></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	backButton:{
		width:'15%',
		height:'90%',
		alignItems:'center',
		justifyContent:'center',
		marginLeft:5,
	},
	headerBorder: {
		width: '100%',
		height: '10%',
		backgroundColor: Colors.HeaderBackgroundColor,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		zIndex: 2,
		justifyContent:'center',
		flexDirection:'row',
	},
	headerText: {
		fontFamily:'bauhausb', 
		fontSize:50, 
		fontWeight:'bold', 
		color:Colors.HeaderTextColor,
	},
	headerView: {
		alignItems:'center',
		justifyContent:'center',
		flex:1,
	}


})

export default Header;