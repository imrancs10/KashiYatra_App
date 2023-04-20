

/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {LANGUAGE_TEXT} from '../../configuration/languageFile';
import Icon from 'react-native-vector-icons/Entypo';
import {Button} from '@react-native-material/core';
import SplashScreen from 'react-native-splash-screen'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: '', showPassword: true};
  }

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  //https://64.media.tumblr.com/3e5f06b5668c65b6a4338f106aeb350f/tumblr_ml9d45d12K1r4zr2vo2_r2_500.gifv
  /**<Image
          style={styles.bgImage}
          source={require('../../img/background3.jpeg')}
          resizeMode="stretch"
        /> */
  render() {
    const {showPassword} = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={{
            uri: 'https://64.media.tumblr.com/3e5f06b5668c65b6a4338f106aeb350f/tumblr_ml9d45d12K1r4zr2vo2_r2_500.gifv',
          }}
          resizeMode="stretch"
        />

        <Text style={styles.title}> {LANGUAGE_TEXT.TITLE_KASHI_YATRA}</Text>
        <Text style={styles.desc}> {LANGUAGE_TEXT.SMALL_DESCRIPTION_TEXT}</Text>
        <View style={styles.textContainer}>
          <View style={styles.smallIcon}>
            <Icon name="mail" size={24} color="#FFF" />
          </View>
          <View style={styles.separator} />
          <View style={styles.textFieldContainer} >
          <TextInput
            allowFontScaling={false}
            style={styles.emailTextField}
            onSubmitEditing={() => { this.passwordTextInput.focus(); }}
            returnKeyType = {'next'}
            keyboardType = {'email-address'}
            selectionColor={'white'}
            underlineColorAndroid = {'transparent'}
            placeholder = "Enter email address"
            placeholderTextColor = "white"
            autoCapitalize = "none"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          </View>
        </View>
        <View style={[styles.textContainer, {marginTop: '6%'}]}>
          <View style={styles.smallIcon}>
            <Icon name="lock" size={24} color="#FFF" />
          </View>
          <View style={styles.separator} />
          <View style={styles.textFieldContainer} >
          <TextInput
            allowFontScaling={false}
            style={styles.emailTextField}
            ref={(input) => { this.passwordTextInput = input; }}
            returnKeyType = {'done'}
            keyboardType = {'default'}
            selectionColor={'white'}
            underlineColorAndroid = {'transparent'}
            placeholder = "Enter Password"
            placeholderTextColor = "white"
            autoCapitalize = "none"
            secureTextEntry = {showPassword}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          </View>
          <TouchableOpacity style={styles.eyeBtnContainer} onPress={()=> this.setState({showPassword: !this.state.showPassword})}>
          <Icon name="eye" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgetPassword}>
          <Text style={styles.forgetText}>
            {LANGUAGE_TEXT.TEXT_FORGET_PASSWORD}
          </Text>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
          <Button
            title={LANGUAGE_TEXT.TEXT_LOGIN}
            color="#FFF"
            onPress={() => this.props.navigation.navigate('MyDrawer')}
          />
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>
            {LANGUAGE_TEXT.TEXT_DONT_HAVE_ACCOUNT}{' '}
          </Text>
          <TouchableOpacity>
            <Text
              style={[styles.signupText, {textDecorationLine: 'underline'}]}>
              {LANGUAGE_TEXT.TEXT_SIGNUP}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
