import { View, StyleSheet, Pressable, Text } from "react-native";

export default function ScanFridgePage() {
  return (
    <View style={styles.scanFridgeContainer}>
      <View style={styles.btnRow}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Add Items</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Scan (Again)</Text>
        </Pressable>
      </View>
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

  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "dashed",
    borderRadius: 16,

    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 32,
  },
  btnText: {
    fontSize: 16,
  },
  btnRow: { flexDirection: "row" },
});
