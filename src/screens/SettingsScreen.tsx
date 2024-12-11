import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {PreferencesContext} from '../context/PreferencesContext';

const SettingsScreen: React.FC = () => {
  const {theme, setTheme, language, setLanguage} =
    useContext(PreferencesContext);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? '#333' : '#fff'},
      ]}>
      <Text style={[styles.title, {color: theme === 'dark' ? '#fff' : '#000'}]}>
        Settings
      </Text>

      {/* Theme Selection */}
      <Text style={{color: theme === 'dark' ? '#fff' : '#000'}}>
        Current Theme: {theme}
      </Text>
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

      {/* Language Selection */}
      <Text style={{color: theme === 'dark' ? '#fff' : '#000'}}>
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

export default SettingsScreen;
