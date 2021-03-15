import React from 'react';
import {
	View,
	Text
} from 'react-native';

import {
	BleManager
} from 'react-native-ble-plx';

class Home extends React.Component{
	constructor(props){
		super(props);

		this.manager = new BleManager();
		this.state = {
			devices: [],
		}

	}

	componentDidMount(){
	    if (Platform.OS === 'android') {
	      this.manager.onStateChange((state) => {

	      	console.log("state")
	        if (state === 'PoweredOn'){
	        	this.scanAndConnect();	
	        } 
	      })
	    } else {
	      this.scanAndConnect()
	    }
	}

	componentWillUnmount(){
		this.manager.stopDeviceScan()
	}



	scanAndConnect() {
	    this.manager.startDeviceScan(null, null, (error, device) => {
	        if (error) {
	            // Handle error (scanning will be stopped automatically)

	            return
	        }


	       // Bluetooth sinyali var mı??
	       if (device) {
	       	console.log(device);
	       	this.setState({
	       		devices: device,
	       	});
	       }else{
	       	console.log("yok");
	       }

	    });
	}

	render(){


		return(
			<View>
				<Text style={{fontFamily: 'BAUHAUSB', fontSize:100}}>

					<View>
						
						{this.state.devices.length > 0 ?
							<View>
								{this.state.devices.map((value, key) => {
									return(
											<Text>{value}</Text>
									);
								})}
							</View>

							:

							null
						}

					</View>

					

				</Text>
			</View>
		);
	}
}

export default Home;