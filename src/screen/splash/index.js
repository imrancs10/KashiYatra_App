import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import SplashScreen from 'react-native-splash-screen'

export default class Splash extends Component {
    componentDidMount(){
         // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
        setTimeout(() => {
            this.props.navigation.navigate('LoginScreen');
        }, 5000);
    }
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage}  source={require('../../assets/images/splash.gif')} resizeMode="stretch"/>
            </View>
        );
    }
}
