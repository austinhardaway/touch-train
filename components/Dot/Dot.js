import React, { Component } from 'react'
import { Button } from 'react-native'
import styles from './styles'


export default class Dot extends Component{
    render() {
        return (
            <Button
            onPress={()=>{console.log('FUCKING BUTTON MOTHERFUCKER')}}
            title=""
            color="#841584"
            accessibilityLabel=""
            style = {styles.buttonStyle} 
            />        
      )
    }
}


