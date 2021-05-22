import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import BookScreen from './src/screens/BookScreen'
import BookDetailScreen from './src/screens/BookDetailScreen'
const navigator = createStackNavigator(
  {
    Books: BookScreen,
    BookDetail: BookDetailScreen
  },
  {
    initialRouteName: 'Books',
    defaultNavigationOptions: {
      title: 'Books'
    }
  }
)

export default createAppContainer(navigator)
