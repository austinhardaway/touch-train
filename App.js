import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dot from './components/Dot/Dot'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.colorWhite}>Hello World!</Text>
      <Dot></Dot>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorWhite : {
    color: 'white',
  },
});
