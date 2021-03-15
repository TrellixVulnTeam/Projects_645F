import {Image} from 'react-native'
import React from 'react';

import Constants from '../utils/constants';

function Logo(){

	return(
		<Image 
			style={{
				width: Constants.LOGO_WIDTH,
				height: Constants.LOGO_HEIGHT,
			}}
			source={require('../assets/logo/etiket_mobil.png')}
		/>
	)
}

export default Logo;