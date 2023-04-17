/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class TopBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {menuTapped} = this.props;
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.menuIconContainer} onPress={menuTapped}>
                    <Icon name="menu-sharp" size={25} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.barCodeScanner} onPress={menuTapped}>
                    <MaterialCommunityIcons name="qrcode-scan" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.searchIconContainer} onPress={menuTapped}>
                    <FontAwesome name="search" size={20} color="white" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.shareIconContainer} onPress={menuTapped}>
                    <FontAwesome name="share-alt" size={20} color="white" />
                </TouchableOpacity>

            </View>
        );
    }
}
