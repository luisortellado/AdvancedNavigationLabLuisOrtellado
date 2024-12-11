// App.tsx
import React from 'react';

import {AuthProvider} from './src/context/AuthContext';
import RootNavigator from './src/navigators/RootNavigator';
import {PreferencesProvider} from './src/context/PreferencesContext';

const App = () => (
  <PreferencesProvider>
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  </PreferencesProvider>
);

export default App;
