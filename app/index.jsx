import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Hii
      </Text>
      <Text style={[styles.title,{color:"green"}]}>My app for disease prevention</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c42626ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontsWeight:'bold',
        fontSize:18,
        color:'#201a1aff'
    },
})