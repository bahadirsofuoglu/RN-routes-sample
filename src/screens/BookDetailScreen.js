import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import BookList from '../components/BookList'
const BookDetailScreen = props => {
  const book = props.navigation.getParam('book')

  return (
    <View>
      <Text>
        {book.title}-{book.author}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default BookDetailScreen
