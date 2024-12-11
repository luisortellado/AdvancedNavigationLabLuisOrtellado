import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SearchScreen = ({navigation}: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Search</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', {id: 42})}
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

export default SearchScreen;
