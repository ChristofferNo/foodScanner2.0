import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView, // Import från react-native, inte react-native-web
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ChooseFilter({ navigate }) {
  const cuisines = [
    { id: 1, name: "Asian" },
    { id: 2, name: "Italian" },
    { id: 3, name: "Mexican" },
    { id: 4, name: "Indian" },
    { id: 5, name: "Thai" },
    { id: 6, name: "Japanese" },
    { id: 7, name: "Chinese" },
    { id: 8, name: "French" },
    { id: 9, name: "Greek" },
    { id: 10, name: "Lebanese" },
    { id: 11, name: "American" },
    { id: 12, name: "Spanish" },
    { id: 13, name: "Vietnamese" },
    { id: 14, name: "Turkish" },
    { id: 15, name: "Korean" },
    { id: 16, name: "Brazilian" },
    { id: 17, name: "German" },
    { id: 18, name: "Moroccan" },
    { id: 19, name: "Ethiopian" },
    { id: 20, name: "Caribbean" },
    { id: 21, name: "Filipino" },
    { id: 22, name: "Russian" },
    { id: 23, name: "Polish" },
    { id: 24, name: "Peruvian" },
    { id: 25, name: "African" },
    { id: 26, name: "Portuguese" },
    { id: 27, name: "Swedish" },
    { id: 28, name: "Danish" },
    { id: 29, name: "Norwegian" },
    { id: 30, name: "Finnish" },
    { id: 31, name: "Argentinian" },
    { id: 32, name: "Middle Eastern" },
    { id: 33, name: "Pakistani" },
  ];

  const filters = [
    { id: 1, name: "Gluten-Free" },
    { id: 2, name: "Keto" },
    { id: 3, name: "High-Protein" },
    { id: 4, name: "Low-Calorie" },
    { id: 5, name: "Vegetarian" },
    { id: 6, name: "Vegan" },
    { id: 7, name: "Dairy-Free" },
    { id: 8, name: "Nut-Free" },
    { id: 9, name: "Sugar-Free" },
    { id: 10, name: "Paleo" },
    { id: 11, name: "Low-Carb" },
    { id: 12, name: "Diabetic-Friendly" },
    { id: 13, name: "Whole30" },
    { id: 14, name: "Halal" },
    { id: 15, name: "Kosher" },
    { id: 16, name: "Fodmap-Friendly" },
    { id: 17, name: "Soy-Free" },
    { id: 18, name: "Wheat-Free" },
    { id: 19, name: "Low-Fat" },
    { id: 20, name: "Heart-Healthy" }
  ];


  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigate("AddIngredient")}
        >
          <Icon name="chevron-back-outline" size={24} />
          <Text>Go Back</Text>
        </Pressable>
      </View>


      <View style={styles.cusine}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Cuisine</Text>
          <Pressable>
            <Text style={styles.viewAll}>View All</Text>
          </Pressable>
        </View>

        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
        >
          {cuisines.slice(0, 10).map((item) => (
            <View
              key={item.id}
              style={[
                styles.cuisineCard,
                item.id === 1 && styles.first, // Lägg till extra stil för första elementet
              ]}
            >
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filter}>
      <View style={[styles.textContainer, styles.filterTextContainer]}>
          <Text style={styles.header}>Filter</Text>
          <Pressable>
            <Text style={styles.viewAll}>View All</Text>
          </Pressable>
        </View>

        <View style={styles.filterCardContainer}>
          {filters.slice(0, 9).map((item) => (
            <View
              key={item.id}
              style={styles.filterCard}
            >
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.options}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  upper: {
    justifyContent: "flex-start",
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
    paddingHorizontal: 32,
    paddingVertical: 32,
    backgroundColor: "white",
  },


  //---------Cusine----------// 

  cusine: {
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 32,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
  },

  first: {
    marginLeft: 32,
  },

  horizontalScroll: {
    paddingVertical: 32,
  },

  cuisineCard: {
    backgroundColor: "lightgrey",
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    paddingHorizontal: 8,
    marginRight: 4,
    borderRadius: 8,
  },

  filter: {
    paddingHorizontal: 32,
  },
  
  filterTextContainer: {
    marginHorizontal: 0,
  },

  filterCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },

  filterCard: {
    backgroundColor: "lightgrey",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginVertical: 4,
    borderRadius: 16
  },



  options: {

  }

});
