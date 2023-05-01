/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import TopBar from '../../components/topBar';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, {sliderWidth, itemWidth} from './styles';
import data from './data';
import slider_data from './sliderData';
import eventData from './eventsData';
const SLIDER_1_FIRST_ITEM = 0;
export default class Feed extends Component {
  constructor(props){
    super(props);
    this.changeActiveIndex = this.changeActiveIndex.bind(this);
    this.state = {activeIndex:SLIDER_1_FIRST_ITEM};
  }

  componentDidMount(){
       this.interval = setInterval(() => {
           if (this.state.activeIndex === 2){
            let currentPage = 0;
            this.setState({activeIndex : currentPage});
            this.carousel.snapToItem(currentPage,true);
           } else {
            let currentPage = this.state.activeIndex + 1;
            this.setState({activeIndex : currentPage});
            this.carousel.snapToItem(currentPage,true);
           }
      }, 4000);
  }
  componentWillUnmount(){
      clearInterval(this.interval);
  }
  menuTapped(){
    this.props.navigation.openDrawer();
  }

  changeActiveIndex(index){
    this.setState({activeIndex:index});
  }

  _renderItem({item,index}){
    return (<View style={styles.rowContainer} >
    <View style={{flexDirection:'row'}}>
       <View style={styles.rowImgContainer}>
          <Image source={item.image} style={styles.img} />
        </View>
        <View style={{flexDirection:'column'}}>
          <Text style={styles.carousalTitle}>{item.title}</Text>
          <Text style={styles.carousalDesc}>{item.description}</Text>
        </View>
    </View>

    </View>);
  }

  renderNearByUI(){
    return (
      <View style={styles.nearbyContainer}>
        <View style={styles.nearbyTitleContainer}>
        <Text
            style={styles.title}>
            Explore Today
          </Text>
        </View>
        <View>
            <Carousel
            layout={'default'}
            ref={ref => this.carousel = ref}
            data={data}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            renderItem={this._renderItem.bind(this)}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={false}
            loopClonesPerSide={2}
            onSnapToItem = { (index) =>  this.changeActiveIndex(index)} />

            <Pagination
            dotsLength={data.length}
            activeDotIndex={this.state.activeIndex}
            containerStyle={styles.paginationContainer}
            dotColor={'rgba(255, 255, 255, 1.0)'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={'gray'}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this.carousel}
            tappableDots={!!this.carousel}
          />
</View>
      </View>
    );
  }

  renderNearByItem(item,index){
    return (
      <View>
         <View style={styles.categoryRowContainer} >
      <Image source={item.item.image} style={styles.categoryImage} />
      </View>
      <Text style={styles.categoryTitle}>{item.item.title}</Text>

      </View>

    );
  }

  renderExploreUI(){
    return (
      <View style={styles.nearbyTravel}>
         <View style={styles.nearbyTitleContainer}>
        <Text
            style={styles.title}>
            Looking For
          </Text>
        </View>

        <View style={{marginTop:5}}>
        <FlatList
    horizontal
    data={slider_data}
    renderItem={this.renderNearByItem.bind(this)}
    keyExtractor={(item, index) => index}
   />
        </View>
      </View>
    );
  }

  renderEvents(item, index){
    return (
      <View style={styles.eventsRow} >
        <View style={styles.eventsRowImageContainer} >
      <Image source={item.item.image} style={styles.eventsImageContainer} />
      </View>

      <View style = {{flexDirection:'column'}}>
      <Text style={styles.eventsTitle}>{item.item.title}</Text>
      <Text style={styles.eventsDesc}>{item.item.description}</Text>
      </View>
      </View>
    );
  }
  renderEventsUI(){
    return (
      <View style={styles.eventsContainer}>
      <View style={styles.nearbyTitleContainer}>
        <Text
            style={styles.title}>
            Events Near You
          </Text>
        </View>
        <View style={styles.eventsFlatListContainer}>
        <FlatList
   data={eventData}
    renderItem={this.renderEvents.bind(this)}
    keyExtractor={(item, index) => index}
   />
        </View>
      </View>
    );
  }
  render(){
    return (
      <View style = {styles.container}>
      <Image style={styles.bgImage} source={require('../../img/background3.jpeg')} resizeMode="stretch" />
       <TopBar menuTapped={()=> this.menuTapped()}  navTitle={'Kashi Yatra'}/>
       {this.renderNearByUI()}
       {this.renderExploreUI()}
        {this.renderEventsUI()}
      </View>
    );
  }

}
