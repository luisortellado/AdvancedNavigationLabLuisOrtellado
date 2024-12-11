import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import CustomHeader from '../components/CustomHeader';
import NotificationsScreen from '../screens/NotificationsScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    <Drawer.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        header: ({navigation}) => (
          <CustomHeader
            title="Details"
            showBackButton
            onBackPress={navigation.goBack}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default AppNavigator;
