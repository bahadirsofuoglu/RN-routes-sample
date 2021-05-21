import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import BookScreen from './src/screens/BookScreen'
const navigator = createStackNavigator(
  {
    Books: BookScreen
  },
  {
    initialRouteName: 'Books',
    defaultNavigationOptions: {
      title: 'Books'
    }
  }
)

export default createAppContainer(navigator)
