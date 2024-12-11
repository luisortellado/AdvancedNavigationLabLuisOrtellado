import React, {useContext, useEffect, useState, lazy, Suspense} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  InitialState,
  LinkingOptions,
} from '@react-navigation/native';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context/AuthContext';

export type RootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  App: undefined;
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['advancednavigationapp://', 'https://advancednavigationapp.com'],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: 'login',
          Register: 'register',
        },
      },
      App: {
        screens: {
          Home: 'home',
          Profile: 'profile',
          Settings: 'settings',
          Details: 'details/:detailsId',
        },
      },
    },
  },
};

const AppNavigator = lazy(() =>
  import('./AppNavigator.tsx').then(module => ({
    default: module.default as unknown as React.ComponentType<any>,
  })),
);

const AuthNavigator = lazy(() =>
  import('./AuthNavigator.tsx').then(module => ({
    default: module.default as unknown as React.ComponentType<any>,
  })),
);
const Stack = createStackNavigator();
const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

const RootNavigator = () => {
  const {isAuthenticated} = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<InitialState | undefined>();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } catch (e) {
        console.error('Error al cargar el estado de navegación:', e);
      } finally {
        setIsReady(true);
      }
    };

    restoreState();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }
  console.log(initialState, 'Initial state');
  return (
    <NavigationContainer
      linking={linking}
      initialState={initialState}
      onStateChange={state =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="App">
            {() => (
              <Suspense
                fallback={<ActivityIndicator size="large" color="#6200EE" />}>
                <AppNavigator />
              </Suspense>
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Auth">
            {() => (
              <Suspense
                fallback={<ActivityIndicator size="large" color="#6200EE" />}>
                <AuthNavigator />
              </Suspense>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootNavigator;
