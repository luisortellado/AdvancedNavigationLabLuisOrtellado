// App.tsx
import React from 'react';

import {AuthProvider} from './src/context/AuthContext';
import RootNavigator from './src/navigators/RootNavigator';

const linking = {
  prefixes: ['yourapp://', 'https://yourapp.com'],
  config: {
    screens: {
      Auth: {
        Login: 'login',
        Register: 'register',
      },
      App: {
        Home: 'home',
        Profile: 'profile',
        Settings: 'settings',
      },
    },
  },
};

const App = () => (
  <AuthProvider>
    <RootNavigator />
  </AuthProvider>
);

export default App;
