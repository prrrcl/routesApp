import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ListItem = ({name, from, to, onPress}) => {
  return(
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Text>{name}</Text>
      <Text>{from}</Text>
      <Text>{to}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc"
  }
})
export default ListItem