import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

import t from 'tcomb-form-native'

const Form = t.form.Form
const Options = t.struct({
    startingSize : t.Number,
    minSize: t.Number,
    tapsPerMove: t.Number,
    dotMoves: t.Boolean,
    colors: t.Boolean,
})


export default class Home extends React.Component{

    startSession= ()=>{
        const value = this._form.getValue()
        console.log(value)
        if(value){
            this.props.options = 
            this.props.navigation.navigate('TouchTrain', value)
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Select Options for Session</Text>
                <Form ref={c=>this._form = c} type={Options} />
                <Button
                    title = "Start Session"
                    onPress={this.startSession}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });