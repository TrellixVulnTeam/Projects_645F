import {Dimensions} from "react-native";


const Constants = {
	WIDTH: Dimensions.get('window').width,
	HEIGHT: Dimensions.get('window').height,

	LOGO_WIDTH: Dimensions.get('window').width * 0.45,
	LOGO_HEIGHT: Dimensions.get('window').width * 0.12,
}

export default Constants;