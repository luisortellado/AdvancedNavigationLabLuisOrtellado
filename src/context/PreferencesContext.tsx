import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PreferencesContextType {
  theme: 'light' | 'dark';
  language: 'en' | 'es';
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'en' | 'es') => void;
}

export const PreferencesContext = createContext<PreferencesContextType>({
  theme: 'light',
  language: 'en',
  setTheme: () => {},
  setLanguage: () => {},
});

const PREFERENCES_KEY = 'USER_PREFERENCES';

interface PreferencesProviderProps {
  children: ReactNode;
}

export const PreferencesProvider: React.FC<PreferencesProviderProps> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [language, setLanguageState] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const storedPreferences = await AsyncStorage.getItem(PREFERENCES_KEY);
        if (storedPreferences) {
          const {theme, language} = JSON.parse(storedPreferences);
          setThemeState(theme);
          setLanguageState(language);
        }
      } catch (e) {
        console.error('Failed to load user preferences:', e);
      }
    };

    loadPreferences();
  }, []);

  const savePreferences = async (preferences: {
    theme: 'light' | 'dark';
    language: 'en' | 'es';
  }) => {
    try {
      await AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
    } catch (e) {
      console.error('Failed to save user preferences:', e);
    }
  };

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    savePreferences({theme: newTheme, language});
  };

  const setLanguage = (newLanguage: 'en' | 'es') => {
    setLanguageState(newLanguage);
    savePreferences({theme, language: newLanguage});
  };

  return (
    <PreferencesContext.Provider
      value={{theme, language, setTheme, setLanguage}}>
      {children}
    </PreferencesContext.Provider>
  );
};
