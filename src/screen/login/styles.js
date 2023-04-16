import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width,
    height,
    position: 'absolute',
  },
  title: {
    color: 'white',
    width,
    marginTop: height * 0.22,
    textAlign: 'center',
    fontSize: width * 0.1,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  desc: {
    color: 'white',
    width,
    marginTop: height * 0.06,
    textAlign: 'center',
    fontSize: width * 0.04,
    fontFamily: 'Roboto',
  },
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
  btnContainer: {
    marginTop: height * 0.04,
    width: width * 0.8,
    marginLeft: width * 0.1,
  },
  forgetPassword: {
    marginLeft: width * 0.6,
    width: width * 0.34,
    height: 30,
    marginTop: 5,
  },
  logoContainer: {
    position: 'absolute',
    width: width * 0.4,
    height: width * 0.4,
    marginLeft: width * 0.3,
    borderRadius: width * 0.2,
    backgroundColor: 'rgba(31,31,31,0.6)',
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
  },
  forgetText: {
    fontWeight: '400',
    fontSize: height * 0.018,
    color: '#FFF',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  signupContainer: {
    position: 'absolute',
    marginTop: height * 0.9,
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontWeight: '400',
    fontSize: height * 0.02,
    color: '#FFF',
  },
});

export default styles;
