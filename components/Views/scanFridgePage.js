import { View, StyleSheet, Text } from "react-native";

export default function ScanFridgePage() {
  return (
    <View style={styles.scanFridgeContainer}>
      <Text>Time to scan!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scanFridgeContainer: {
    flex: 1, // Gör att container fyller hela skärmen
    justifyContent: "center", // Centrerar innehållet vertikalt
    alignItems: "center", // Centrerar innehållet horisontellt
    width: "100%",
  },
});
