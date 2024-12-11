import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {PreferencesContext} from '../context/PreferencesContext';

const SettingsScreen: React.FC = () => {
  const {theme, setTheme, language, setLanguage} =
    useContext(PreferencesContext);

  const dynamicStyles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <Text style={[styles.title, dynamicStyles.title]}>Settings</Text>

      <Text style={dynamicStyles.text}>Current Theme: {theme}</Text>
      <Button
        title="Switch to Light Theme"
        onPress={() => setTheme('light')}
        disabled={theme === 'light'}
      />
      <Button
        title="Switch to Dark Theme"
        onPress={() => setTheme('dark')}
        disabled={theme === 'dark'}
      />

      <Text style={dynamicStyles.text}>
        Current Language: {language === 'en' ? 'English' : 'Spanish'}
      </Text>
      <Button
        title="Switch to English"
        onPress={() => setLanguage('en')}
        disabled={language === 'en'}
      />
      <Button
        title="Switch to Spanish"
        onPress={() => setLanguage('es')}
        disabled={language === 'es'}
      />
    </View>
  );
};

// Estilos comunes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
  },
  text: {
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  title: {
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});

export default SettingsScreen;
