import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderComp from '../../components/HeaderComp'
export default function index() {
  return (
    <View style={styles.mainframe}>
      <HeaderComp/>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainframe:{
    flex:1,

    alignItems:'center',
    backgroundColor:"#a7f7f7ff",
    
  }
})