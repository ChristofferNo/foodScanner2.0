import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// component Imports
import NavBar from "./src/components/bottomNavbar";
import HomePage from "./src/Views/homePage";
import ScanFridgePage from "./src/Views/scanFridgePage";
import AddIngredient from "./src/Views/addIngridients";
import ChooseFilter from "./src/Views/chooseFilter";
import TestPage from "./src/Views/testPage";

export default function App() {
  // Navigation logic -------
  const [page, setPage] = useState("HomePage");
  const pageMap = { HomePage, ScanFridgePage, AddIngredient, ChooseFilter, TestPage };
  const ActivePage = pageMap[page];
  // ---------------------------------

  // Navbar logic -------
  const [showNavbar, setShowNavbar] = useState(true);
  // -----------------------------

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          {/* Render different components (Navigation logic) */}
          <ActivePage navigate={setPage} showNavbar={setShowNavbar} />

          {/* Conditionally Render Navbar */}
          {showNavbar && <NavBar style={styles.navbar} navigate={setPage} />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  safeAreaContainer: {
    flex: 1,
    alignItems: "center",
  },
});
