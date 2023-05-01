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
    //	https://64.media.tumblr.com/86583a3cf23d5a790b1b027b495377f5/tumblr_mld6x9yYSA1r4zr2vo1_500.gifv
    render(){
        return (
            <View style={styles.container}>
            

                <Image style={styles.bgImage}  source={{uri:'https://64.media.tumblr.com/86583a3cf23d5a790b1b027b495377f5/tumblr_mld6x9yYSA1r4zr2vo1_500.gifv'}} resizeMode="stretch"/>
                <View style={styles.logoTopContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/KashiYatraLogo.png')}
          resizeMode="center"
          resizeMethod="auto"
        />
        </View>
            </View>
        );
    }
}
