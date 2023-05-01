import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex : 1,
    },
    bgImage: {
      width,
      height,
      position: 'absolute',
    },
    logoTopContainer:{
        width,
        height: height * 0.20,
        position: 'absolute',
        justifyContent : 'center',
        alignItems  : 'center',
        marginTop : height * 0.14,
      },
      logo:{
        width,
        height: height * 0.20,
      }
})

export default styles;