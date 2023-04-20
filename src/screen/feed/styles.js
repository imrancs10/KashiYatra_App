import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.60;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const styles = StyleSheet.create({
    container: {flex:1},
    bgImage: {width, height, position:'absolute'},
    nearbyContainer: {width, height: height * 0.30, marginTop: 50},
    nearbyTitleContainer:{width, height: 30, flexDirection:'row'},
    title: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 20,
       fontFamily: 'Roboto-Medium',
        marginTop: 10,
      },
      paginationContainer: {
        marginTop:-10,
     },
     paginationDot: {
         width: 12,
         height: 12,
         borderRadius: 6,
         marginHorizontal: -3,
     },
     slider: {
        marginTop: 10,
        overflow: 'visible', // for custom animations
    },sliderContentContainer: {
        paddingVertical: 0,// for custom animation
    },
    rowContainer: {
        width: width * 0.85,
        height : height * 0.2,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius : 8,
        borderWidth : 1,
        borderColor : 'rgba(255,255,255,0.8)',
    },
    rowImgContainer: {
        width: height * 0.14,
        height : height * 0.14,
        marginTop :height * 0.03,
        marginLeft: width * 0.03,
    },
    img: {
        width: height * 0.14,
        height : height * 0.14,
        borderRadius : 4,
    },
    carousalTitle : {
        color: '#fff',
        fontSize: width * 0.05,
        marginLeft: 10,
        marginTop: height * 0.03,
       fontFamily: 'Roboto-Medium',
    },
    carousalDesc : {
        color: '#fff',
        fontSize: width * 0.034,
        height : height * 0.1,
        width : width * 0.8 - height * 0.14 - 10,
        marginTop: height * 0.005,
        marginLeft: 10,
       fontFamily: 'Roboto-Regular',
    },
    nearbyTravel : {
        width,
        height : 120,
    },
    categoryRowContainer : {
        width : 90 ,
        height : 90,
        borderRadius : 45 ,
        backgroundColor : 'white',
       marginLeft: 15,
    },
    categoryImage: {
        width : 90 ,
        height : 90,
        borderRadius : 45 ,
    },
    upparTransparent: {
        position : 'absolute',
        width : 90 ,
        height : 90,
        borderRadius : 45 ,
        backgroundColor: 'rgba(21,21,21,0.6)',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth: 1,
        borderColor : 'black',
    },
    categoryTitle  : {
        color: '#fff',
        fontSize: width * 0.04,
       fontFamily: 'Roboto-Medium',
       width : 105 ,
       textAlign : 'center',
       marginTop : 2,
    },
     eventsRow: {
        marginLeft : 20,
        width : width - 40,
        height : height * 0.12,
        marginTop: height * 0.01,
        backgroundColor : 'rgba(255,255,255,0.6)',
        borderWidth: 1 ,
        borderColor  :'rgba(255,255,255,0.9)',
        borderRadius: 8,
        flexDirection: 'row',
     },eventsContainer: {
        marginTop : height * 0.06,
        width,
        height : height * 0.42,
     },
     eventsFlatListContainer: {
        marginTop:5,
        width,
        height:height * 0.35,
     },
     eventsRowImageContainer:{
        marginLeft: 15,
        width : height * 0.09,
        height : height * 0.09,
        marginTop : height * 0.015,
      },
      eventsImageContainer:{
        width : height * 0.09,
        height : height * 0.09,
        borderRadius : height * 0.045,
      },
      eventsTitle : {
        color: '#fff',
        fontSize: width * 0.05,
        marginLeft: 10,
        marginTop: height * 0.01,
       fontFamily: 'Roboto-Medium',
      },
      eventsDesc : {
        color: '#fff',
        fontSize: width * 0.034,
        height : height * 0.06,
        width : width * 0.87 - height * 0.09 - 10,
        marginTop: height * 0.005,
        marginLeft: 10,
       fontFamily: 'Roboto-Regular',
      }


});

export default styles;
