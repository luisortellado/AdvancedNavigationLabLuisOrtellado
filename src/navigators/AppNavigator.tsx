// AppNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BottomTabNavigator from './BottomTabNavigator';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default AppNavigator;
