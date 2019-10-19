import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SearcherScreen from './screens/Searcher'
import ListScreen from './screens/List'
import DetailScreen from './screens/Detail'

const AppNavigator = createStackNavigator({
  Searcher: {
    screen: SearcherScreen
  },
  List: {
    screen: ListScreen
  },
  Detail: {
    screen: DetailScreen
  }
},
  {
    initialRouteName: 'Searcher'
})

export default createAppContainer(AppNavigator)