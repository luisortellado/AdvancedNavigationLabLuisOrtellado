import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const RegisterScreen = ({navigation}: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Register</Text>
    <Button
      title="Back to Login"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
