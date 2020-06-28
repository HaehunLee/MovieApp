import React from 'react'
import Styled from 'styled-components/native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { AsyncStorage, ActivityIndicator } from 'react-native';

const Containver = Styled.View`
    flex : 1;
    background-color : #141414;
    justify-content : cneter;
    align-items : center;
`

interface Props {
    navigation : NavigationScreenProp<NavigationState>;
}

const CheckLogin = ({navigation}: Props) => {
    AsyncStorage.getItem('key')
    .then((value) => {
        if(value) {
            navigation.navigate('MovieNavigator');
        } else {
            navigation.navigate('LoginNavigator');
        }
    })
    .catch((error: Error) => {
        console.log('error : ',error)
    })

    return (
        <Containver>
            <ActivityIndicator size="large" color="#E70915" />
        </Containver>
    )
}

CheckLogin.navigationOptions = {
    header: null,
}

export default CheckLogin;
