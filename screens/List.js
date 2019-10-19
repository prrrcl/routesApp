import React, { useState, useEffect, useCallback } from 'react'
import useAxios from '../hooks/useAxios'
import { ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView, FlatList } from 'react-native'
import ListItem from '../components/ListItem'


const ListScreen = ({navigation}) => {
  const [dates] = useState(navigation.state.params.dates)
  const { refreshing, onRefresh, data } = useAxios(`/q?datefrom=${dates.from.getTime()}&dateto=${dates.to.getTime()}`)
  
return(
  <SafeAreaView style={styles.container}>
    <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
<Text>List of routes</Text>
  {data ?
  <>
    <FlatList
    data={data}
    keyExtractor={e => e.id}
    renderItem={({item})=> 
      <ListItem
        name={item.name}
        from={item.from.name}
        to={item.to.name}
        onPress={()=> navigation.navigate('Detail', item)}
      />
    }
  />
  {data.length === 0 && <Text>No hay rutas</Text>}
  </>
  :
  <Text>Loading data...</Text>
  }
  
  </ScrollView>
  
  </SafeAreaView>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ListScreen.navigationOptions = ({
  title: "Routes"
})

export default ListScreen;