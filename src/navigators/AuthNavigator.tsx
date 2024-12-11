import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CustomHeader from '../components/CustomHeader';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={({navigation}) => ({
      header: ({route}) => (
        <CustomHeader
          title={route.name}
          showBackButton={route.name !== 'Login'}
          onBackPress={navigation.goBack}
        />
      ),
    })}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
