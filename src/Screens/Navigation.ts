import {createStackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {CheckLogin} from '~/Screens/CheckLogin';
import {Login} from '~/Screens/Login';
import {MovieDetail} from '~/Screens/MovieDetail';
import MovieHome from './MovieHome';


const LoginNavigator = createStackNavigator({
    Login
});

const MovieNavigator = createStackNavigator({
    MovieHome,
    MovieDetail
});

const AppNavigator = createStackNavigator(
    {
        CheckLogin,
        LoginNavigator,
        MovieNavigator
    },
    {
        initialRouteNAme : 'CheckLogin',
    }
    );

export default createAppContainer(AppNavigator);