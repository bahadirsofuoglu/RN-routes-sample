import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import BookList from '../components/BookList'
const BookScreen = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BookDetail')
        }}
        style={styles.buttonStyles}
      >
        <Text>Go to BookDetailScreen</Text>
      </TouchableOpacity>
      <BookList navigation={props.navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 5,
    marginHorizontal: 7
  }
})

export default BookScreen
