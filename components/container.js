import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Container({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>

    
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 32,
    width: "100%"
  }

});