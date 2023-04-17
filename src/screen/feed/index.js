/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {View, Image} from 'react-native';
import TopBar from '../../components/topBar';

export default class Feed extends Component {
  constructor(props){
    super(props)
  }
  menuTapped(){
    this.props.navigation.openDrawer();
  }
  render(){
    return (
      <View style = {{flex:1}}>
      <Image style={{width:'100%', height:'100%', position:'absolute'}} source={require('../../img/background3.jpeg')} resizeMode="stretch" />
       <TopBar menuTapped={()=> this.menuTapped()}></TopBar>
      </View>
    );
  }

}
