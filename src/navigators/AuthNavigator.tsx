import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CustomHeader from '../components/CustomHeader';

const Stack = createStackNavigator();

const renderCustomHeader = (routeName: string, navigation: any) => {
  return (
    <CustomHeader
      title={routeName}
      showBackButton={routeName !== 'Login'}
      onBackPress={navigation.goBack}
    />
  );
};

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={({navigation, route}): StackNavigationOptions => ({
      header: () => renderCustomHeader(route.name, navigation),
    })}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
