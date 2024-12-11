// BottomTabNavigator.tsx
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/navigation';
import {House, MagnifyingGlass, Bell} from 'phosphor-react-native';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

type TabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const getTabBarIcon = (
  routeName: keyof TabParamList,
  color: string,
  size: number,
): React.ReactNode => {
  switch (routeName) {
    case 'Home':
      return <House color={color} size={size} />;
    case 'Search':
      return <MagnifyingGlass color={color} size={size} />;
    case 'Notifications':
      return <Bell color={color} size={size} />;
    default:
      return null;
  }
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarIcon: ({color, size}) =>
          getTabBarIcon(route.name as keyof TabParamList, color, size),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
