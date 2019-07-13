import React, { Component } from 'react'
import { TouchableOpacity , Dimensions} from 'react-native'
import styles from './styles'

const colorList = [
    'white',
    'pink',
    'purple',
    'blue',
    'yellow',
    'green',
    'red',
    'crimson',
    'darkgoldenrod',
    'aqua',
    'deeppink'
]

export default class Dot extends Component{

    constructor(props){
        super(props)
        console.log('props', this.props)
        this.state =  {
            size: this.props.startingSize,
            successfulTouches: 0,
            top:50,
            left:48.4,
            dotColor: 'white'
        }
    }
    
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
        if(this.props.colors){
            this.setState(prev =>({
                dotColor: colorList[Math.floor(Math.random()*colorList.length)]
            }))
            console.log('color = ', this.state.dotColor)
        }
        if(this.props.dotMoves && this.state.successfulTouches!==0 && this.state.successfulTouches%this.props.tapsPerMove===0){
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


