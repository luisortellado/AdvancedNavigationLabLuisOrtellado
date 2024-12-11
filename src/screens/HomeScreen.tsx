import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}: any) => (
  <View accessibilityLabel="Home screen" style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Button
      accessibilityLabel="Go to Details"
      title="Go to Details"
      onPress={() => navigation.navigate('Details', {id: 1})}
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

export default HomeScreen;
