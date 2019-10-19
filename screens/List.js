import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

const ListScreen = ({navigation}) => {
  const [dates] = useState(navigation.state.params.dates)
  const [data, setData] = useState()
  
  const fetchData = () =>{
    const ax =  axios.create({baseURL:'https://serverless.prrrcl.now.sh/api/rutas'})
    return ax.get('/')
    .then(res => setData(res.data))
  }
  useEffect(()=>{
    fetchData();
  },[])

return(
  <View>
  <Text>
    List of routes
  </Text>
  {data ?
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
  :
  <Text>Loading data...</Text>
  }
  
  </View>
)
}

ListScreen.navigationOptions = ({
  title: "Routes"
})

export default ListScreen;