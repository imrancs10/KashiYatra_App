import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screen/login';
import Splash from '../screen/splash';

const Stack = createNativeStackNavigator();

export default class NAV extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
           <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="MyDrawer" component={MyDrawer}   options={{ headerShown: false }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
