/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from '../../screen/feed';
import Profile from '../../screen/article';
import CustomDrawer from '../../components/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: 'rgba(89,148,203,1.0)',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }}>
      <Drawer.Screen name="Home" component={Feed} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}/>
      <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}/>
    </Drawer.Navigator>
  );
}

export default MyDrawer;