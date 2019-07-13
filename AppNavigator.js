import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import TouchTrain from './TouchTrain'

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    TouchTrain: {
        screen: TouchTrain,
        navigationOptions: {
            header: null,
        }
    }
})

const AppNav = createAppContainer(AppNavigator)

export default AppNav