import { StyleSheet } from 'react-native'



function getStyle(state){
    return StyleSheet.create({
        buttonStyle : {
            backgroundColor: 'white',
            borderRadius: state.size,
            height: state.size,
            width: state.size,
            position: 'absolute',
            top: `${state.top}%`,
            marginTop: -(state.size/2),
            left: `${state.left}%`,
            marginLeft: -(state.size/2)
        },
    })
}


export default getStyle
