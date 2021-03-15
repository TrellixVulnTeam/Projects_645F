import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Constants from '../utils/constants';
import Colors from '../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons';


class Buttons extends React.Component{
	constructor(props){
		super(props);

		console.log("Home");
	}

	render(){
		return(
			<View style={styles.buttonBorder}>
				<TouchableOpacity style={styles.buttonCells}>
					<FontAwesomeIcon icon={ faCaretUp } color={"#ffffff"} size={60} />
				</TouchableOpacity>

				<View style={styles.buttonsInTheMiddle}>
					<View style={styles.buttonFlex}>
						<TouchableOpacity  style={styles.buttonCells}>
							<Text style={styles.buttonText}>P</Text>
						</TouchableOpacity>
					</View>
					
					<View style={styles.buttonFlex}>
						<TouchableOpacity  style={styles.buttonCells}>
							<FontAwesomeIcon icon={ faCheck } color={"#ffffff"} size={24} />
						</TouchableOpacity>
					</View>
					
					<View style={styles.buttonFlex}>
						<TouchableOpacity  style={styles.buttonCells}>
							<Text style={styles.buttonText}>ESC</Text>
						</TouchableOpacity>
					</View>
				</View>

				<TouchableOpacity style={styles.buttonCells}>
					<FontAwesomeIcon icon={ faCaretDown } color={"#ffffff"} size={60} />
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	buttonBorder: {
		margin: '10%',
		width: Math.round(Constants.WIDTH * 58 / 100),
		height:Math.round(Constants.WIDTH * 58 / 100),
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'column',

	},
	buttonCells: {
		width: Math.round(Constants.WIDTH * 15 / 100),
		height: Math.round(Constants.WIDTH * 15 / 100),
		borderWidth: 3,
		borderColor:Colors.DisplayButtonBorderAndTextColor,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonsInTheMiddle: {
		flexDirection:'row',
		alignItems:'center',
		flex:1,
	},
	buttonFlex: {
		flex:1,
		alignItems:'center'
	},
	buttonText: {
		fontSize:22,
		fontWeight:'bold',
		color: Colors.DisplayButtonBorderAndTextColor,
		
	}
})

export default Buttons;