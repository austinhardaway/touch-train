import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Dot from './components/Dot/Dot'

export default function App() {
  return (
    <View style={styles.container}>
      <Dot width={Math.round(Dimensions.get('window').width)} height={Math.round(Dimensions.get('window').height)} minSize={100}></Dot>
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
