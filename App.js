import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GeneralButton from "./components/generalButton";
import chatGPT from "./api/chatGPT";
import recipeView from "./components/recipeView";
import NavBar from './components/bottomNavbar'
import HomePage from "./components/Views/homePage";
import AddIngredient from "./components/Views/manuallyAddIngridients";


export default function App() {
  const generateRecipes = async () => {
    const recipePrompt = chatGPT.recipePrompt(ingredients);
    console.log("ingredients prompt:", recipePrompt);
    const chatGPTResponse = await chatGPT.chatGPTService([
      { role: "user", content: recipePrompt },
    ]);
    console.log("chatGPTResponse", JSON.parse(chatGPTResponse));
    setRecipes(JSON.parse(chatGPTResponse));
  };

  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // Lägg till / ta bort ingrediemter i state
  const addIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
  };
  const deleteIngredient = (updatedIngredients) => {
    setIngredients(updatedIngredients);
  };

  return (
    <View style={styles.container}>
      <AddIngredient/>
      <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
