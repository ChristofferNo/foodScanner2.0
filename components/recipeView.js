import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function InputBar({ recipe }) {
  const recipeObj = JSON.parse(recipe)(
    ({ recipeName, ingredients, stepsToMake } = recipe)
  );
  console.log("destructuring test", RecipeName, ingredients, stepsToMake);
  return (
    <View style={styles.container}>
      <Text>{{ recipeName }}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
