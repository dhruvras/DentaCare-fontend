import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
})