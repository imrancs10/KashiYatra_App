import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {width, height: 50, position:'absolute', flexDirection:'row'},
    menuIconContainer : {width: 30, marginLeft: 20, marginTop:12.5},
    barCodeScanner: {width : 30, marginLeft: width - 170, marginTop: 15},
    searchIconContainer: {width : 30, marginLeft: 10, marginTop: 15},
    shareIconContainer: {width : 30, marginLeft: 10, marginTop: 15},
    categoryTitle  : {color: '#fff',fontSize: 19,fontFamily: 'Roboto-Medium',width : 105 ,
       textAlign : 'center',
       marginTop : 13,
       position:'absolute',
       marginLeft: 50,
    }

});

export default styles;
