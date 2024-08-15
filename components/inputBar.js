import { Text, StyleSheet, View,TextInput } from 'react-native'
import React, { Component } from 'react'

export default class inputBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addItem}>
        <TextInput style={styles.input} placeholder='Skriv ingridienser/matprodukter'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    addItem: {
        backgroundColor: '#edeef0', // background: #edeef0;
        borderRadius: 32, // border-radius: 2rem; (2rem ≈ 32px)
        padding: 16, // padding: 0.5rem; (0.5rem ≈ 8px)
    },
    input: {
        textAlign: 'center', // Motsvarar text-align: center;
        paddingLeft: 16, // padding-left: 2rem; (1 rem = 16px, så 2rem = 32px, vi använder 16px här för att matcha standarder)
        width: 240, // width: 15rem; (1 rem = 16px, så 15rem = 240px)
        paddingRight: 16, // padding-right: 2rem; (samma som paddingLeft)
        backgroundColor: 'transparent', // background: transparent;
        borderWidth: 0, // border: none;
        outlineWidth: 0, // outline: none; (React Native har ingen direkt motsvarighet till CSS outline)
    },
})