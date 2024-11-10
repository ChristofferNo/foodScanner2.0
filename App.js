import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GeneralButton from "./components/generalButton";
import chatGPT from "./api/chatGPT";
import recipeView from "./components/recipeView";

// component Imports
import NavBar from "./components/bottomNavbar";
import HomePage from "./components/Views/homePage";
import ScanFridgePage from "./components/Views/scanFridgePage";
import ListItemsPage from "./components/Views/listItemsPage";
import AddIngredient from "./components/Views/manuallyAddIngridients";


export default function App() {
  const [page, setPage] = useState("HomePage");
  const pageMap = { HomePage, ScanFridgePage, ListItemsPage };
  const ActivePage = pageMap[page];

  return (
    <View style={styles.container}>
      <HomePage/>
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
