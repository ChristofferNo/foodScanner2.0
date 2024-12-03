import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Container from "../components/container";
import GeneralButton from "../components/generalButton";
import Container from "../components/container";

export default function HomePage({ navigate }) {
  return (
    <Container>
    <View style={styles.homeContainer}>
      <View style={styles.upper}>
        <Text style={styles.headerElement}>Good Morning!</Text>
        <Text style={styles.text}>Find todays recipe</Text>
      </View>
      <View style={styles.lower}>
        <GeneralButton
            title="Scan Fridge"
            onPress={() => navigate("ScanFridgePage")}
        />

        <GeneralButton
            title="Type manually"
            onPress={() => navigate("AddIngredient")}
        />
      </View>
    </View>
      <View style={styles.homeContainer}>
        <View style={styles.upper}>
          <Text style={styles.headerElement}>Good Morning!</Text>
          <Text style={styles.text}>Find todays recipe</Text>
        </View>
        <View style={styles.lower}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              navigate("ScanFridgePage");
            }}
          >
            <Text style={styles.btnText}>Scan Fridge</Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => {
              navigate("AddIngredient");
            }}
          >
            <Text style={styles.btnText}>Type Manually</Text>
          </Pressable>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1, // Gör att container fyller hela skärmen
    justifyContent: "center", // Centrerar innehållet vertikalt
    alignItems: "center", // Centrerar innehållet horisontellt
    width: "100%",
  },
  upper: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
  },

  lower: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },

  headerElement: {
    fontSize: 32,
    fontWeight: "700",
  },

  text: {
    marginTop: 8,
    fontSize: 20,
  },


});
