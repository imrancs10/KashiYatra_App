import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');



const styles = StyleSheet.create({
    container: {flex:1},
    bgImage: {width, height, position:'absolute'},
    placeholderImage: {width:'100%', height: '30%',marginTop: 50,backgroundColor:'rgba(255,255,255,0.6)', justifyContent:'center', alignItems:'center'},
   templeImage: {width, height: height * 0.3},
    textContainer: {
        marginLeft: width * 0.06,
        width: width * 0.88,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'rgba(1,1,1,0.3)',
        marginTop: height * 0.02,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
      },
    separator: {
    width: 1,
    height: 48,
    marginTop: 1,
    marginLeft: width * 0.03,
    backgroundColor: '#FFF',
  },
  smallIcon: {
    marginLeft: width * 0.03,
    marginTop: 12.5,
  },
  textFieldContainer: {
    width: width * 0.76,
    marginLeft: width * 0.02,
  },
  emailTextField: {
    height: 50,
    left:5,
    color : 'white',
}, btnContainer: {
    marginTop: height * 0.20,
    width: width * 0.8,
    marginLeft: width * 0.1,
  },
  dropdown: {
    height: 50,
    marginLeft: width * 0.04,
    borderColor: 'gray',
    width : width * 0.88 - 30,
  },placeholderStyle: {
    fontSize: 16,
    color : 'white',
  },
  selectedTextStyle: {
    fontSize: 16,
    color : 'white',
  },

});


export default styles;
