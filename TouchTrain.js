import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Dot from './components/Dot/Dot'

export default class TouchTrain extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Dot width={Math.round(Dimensions.get('window').width)}
             height={Math.round(Dimensions.get('window').height)} 
             minSize={this.props.navigation.getParam('minSize', 200)}
             startingSize={this.props.navigation.getParam('startingSize', 470)}
             dotMoves={this.props.navigation.getParam('dotMoves', true)}
             tapsPerMove={this.props.navigation.getParam('tapsPerMove', 200)}
             colors={this.props.navigation.getParam('colors', false)}
        ></Dot>
      </View>
    );
  }
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
