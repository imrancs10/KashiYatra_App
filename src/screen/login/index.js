/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {LANGUAGE_TEXT} from '../../configuration/languageFile';
import Icon from 'react-native-vector-icons/Entypo';
import {Button} from '@react-native-material/core';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {email: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={require('../../img/background5.png')}
          resizeMode="stretch"
        />

        <Text style={styles.title}> {LANGUAGE_TEXT.TITLE_KASHI_YATRA}</Text>
        <Text style={styles.desc}> {LANGUAGE_TEXT.SMALL_DESCRIPTION_TEXT}</Text>
        <View style={styles.textContainer}>
          <View style={styles.smallIcon}>
            <Icon name="mail" size={24} color="#FFF" />
          </View>
          <View style={styles.separator} />
          <View style={styles.textFieldContainer} />
        </View>
        <View style={[styles.textContainer, {marginTop: '6%'}]}>
          <View style={styles.smallIcon}>
            <Icon name="lock" size={24} color="#FFF" />
          </View>
          <View style={styles.separator} />
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
            onPress={() => alert('Hi')}
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
