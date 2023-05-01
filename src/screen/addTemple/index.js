/* eslint-disable no-alert */

import {View, Image, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import TopBar from '../../components/topBar';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {Button} from '@react-native-material/core';
// Import Image Picker
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
const {height} = Dimensions.get('window');

const data = [
    { label: 'Kedareshwar Khand, Varanasi', id: 6, value: 'Kedareshwar Khand, Varanasi' },
    { label: 'Omkareshwar Khand, Varanasi' , id: 5, value: 'Omkareshwar Khand, Varanasi' },
    { label: 'Vishweshwar Khand, Varanasi', id: 4, value: 'Vishweshwar Khand, Varanasi' },
   ];


export default class AddTempleDetail extends React.Component {
    constructor(props){
        super(props);

        this.state = {filePath: '', templeName:'', remarks:'', isFocus:false, value:''};
    }
    menuTapped(){
        this.props.navigation.openDrawer();
      }

      chooseImage(){

        this.setState({filePath:''});
        let options = {
            title: 'Select Image',
            customButtons: [
              {
                name: 'customOptionKey',
                title: 'Choose Photo from Custom Option',
              },
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };

          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log(
                'User tapped custom button: ',
                response.customButton
              );
              alert(response.customButton);
            } else {
              let source = response;
              // You can also display the image using data:
              // let source = {
              //   uri: 'data:image/jpeg;base64,' + response.data
              // };
              this.setState({filePath:source});
            }
          });
      }

      renderPlaceholderImage(){
        if (this.state.filePath !== ''){
            return (
                <TouchableOpacity style={styles.placeholderImage} onPress={()=> this.chooseImage()}>
                   <Image style={styles.templeImage} source={this.state.filePath} />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.placeholderImage} onPress={()=> this.chooseImage()}>
                    <Ionicons name="images" size={height * 0.15} color={'white'} />
                </TouchableOpacity>
            );
        }
     }
     saveBtnTapped(){
        if (this.state.filePath === ''){
            alert('Please upload temple image');
            return;
        } else if (this.state.templeName === ''){
            alert('Please enter temple name');
            return;
        }else if (this.state.value === ''){
            alert('Please select temple devision');
            return;
        } else if (this.state.remarks === ''){
            alert('Please enter temple remarks');
            return;
        }

        alert('Image uploaded successfully');
     }

  render(){
    return (
        <View style = {styles.container}>
        <Image style={styles.bgImage} source={require('../../img/background3.jpeg')} resizeMode="stretch" />
        <TopBar menuTapped={()=> this.menuTapped()}  navTitle={'Add Temple Detail'}/>

         {this.renderPlaceholderImage()}

         <View style={[styles.textContainer, {marginTop: '10%'}]}>

          <View style={styles.textFieldContainer} >
          <TextInput
            allowFontScaling={false}
            style={styles.emailTextField}
            ref={(input) => { this.passwordTextInput = input; }}
            returnKeyType = {'done'}
            keyboardType = {'default'}
            selectionColor={'white'}
            underlineColorAndroid = {'transparent'}
            placeholder = "Enter Temple Name"
            placeholderTextColor = "white"
            autoCapitalize = "none"
            onChangeText={(templeName) => this.setState({templeName})}
            value={this.state.templeName}
          />
          </View>
         </View>

         <View style={[styles.textContainer, {marginTop: '5%'}]}>
         <Dropdown
          style={[styles.dropdown, this.state.isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}

          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!this.state.isFocus ? 'Select Devision' : '...'}
          value={this.state.value}
          onFocus={() => this.setState({isFocus:true})}
          onBlur={() => this.setState({isFocus:false})}
          onChange={item => {
            this.setState({isFocus:false, value: item.value});}
          }

        />
         </View>

         <View style={[styles.textContainer, {marginTop: '5%'}]}>


<View style={styles.textFieldContainer} >
<TextInput
  allowFontScaling={false}
  style={styles.emailTextField}
  ref={(input) => { this.passwordTextInput = input; }}
  returnKeyType = {'done'}
  keyboardType = {'default'}
  selectionColor={'white'}
  underlineColorAndroid = {'transparent'}
  placeholder = "Enter Remarks"
  placeholderTextColor = "white"
  autoCapitalize = "none"
  onChangeText={(remarks) => this.setState({remarks})}
  value={this.state.remarks}
/>
</View>

</View>

<View style={styles.btnContainer}>
          <Button
            title="Save Detail"
            color="#FFF"
            onPress={() => this.saveBtnTapped()}
          />
        </View>
        </View>
    );
  }
}
