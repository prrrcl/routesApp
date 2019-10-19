import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'
const SearcherScreen = ({navigation}) => {

  const [dates, setDates] = useState({
    from:'' ,
    to: ''
  });

  const handleDatePicker = (date, dateSelected) => {
    date === 'from' ? setDates({...dates, from: new Date(dateSelected)}) : setDates({...dates, to: new Date(dateSelected)})
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    label: {
      fontWeight: '600',
      margin: 10,
    },
    button: {
      marginTop: 100
    },
    buttonText: {
      color: 'blue'
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.label}>From:</Text>
      <DatePicker
        style={{width: 200}}
        date={dates.from}
        mode="date"
        placeholder="select date"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={date => handleDatePicker('from',date )}
      />
      <Text style={styles.label}>To:</Text>
      <DatePicker
        style={{width: 200}}
        date={dates.to}
        mode="date"
        placeholder="select date"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={date => handleDatePicker('to',date )} 
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={()=> {
              navigation.navigate('List',{dates} )
            }
          }
          >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
    </View>
  )
}
SearcherScreen.navigationOptions = ({
  title: "Searcher"
})
export default SearcherScreen;