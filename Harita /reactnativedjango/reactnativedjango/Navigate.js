import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppScreen from './App';
import LoginScreen from './Login';

const MainNavigator = createStackNavigator(
  {
  Home: {screen: AppScreen},
  Login: {screen:LoginScreen}
  },
  {
    initialRouteName: 'Home',
    headerMode:'none'
  }
);

const AppNavigate = createAppContainer(MainNavigator);

export default AppNavigate;
