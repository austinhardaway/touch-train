import React, { Component } from 'react'
import { TouchableOpacity , Dimensions} from 'react-native'
import styles from './styles'


export default class Dot extends Component{
    
    computeNewBounds(){
        return {
            vert: {
                low: (this.state.size / ((this.props.height-15)*2))*100,
                high: (100 -( this.state.size / (this.props.height*2))*100)
            },
            hor: {
                low: (this.state.size / (this.props.width*2))*100,
                high: (100 - (this.state.size / (this.props.width*2))*100)
            }
        }
    }

    getNewPos(){
        let bounds = this.computeNewBounds()
        console.log(bounds)
        return {
            top: Math.random()*(bounds.vert.high - bounds.vert.low) + bounds.vert.low,
            left: Math.random()*(bounds.hor.high - bounds.hor.low) + bounds.hor.low
        }

    }

    onDotPress(){
        if(this.state.successfulTouches!==0 && this.state.successfulTouches%3===0){
            let newPos = this.getNewPos()
            this.setState(prev => 
                ({
                    successfulTouches: prev.successfulTouches+1,
                    top: newPos.top,
                    left: newPos.left
                })
            )
        } else {
            this.setState(prev => 
                ({
                    size: (prev.size<this.props.minSize)? prev.size : prev.size-10,
                    successfulTouches: prev.successfulTouches+1,
                })
            )
        }
        console.log('Number of successful touches: ', this.state.successfulTouches)
        console.log(this.props.height, this.props.width)
    }

    state = {
        size: 470,
        successfulTouches: 0,
        top:50,
        left:48.4
    }

    render() {
        return (
            <TouchableOpacity
                onPress={()=>{this.onDotPress()}}
                style = {styles(this.state).buttonStyle} 
            >
            </TouchableOpacity>
      )
    }
}


