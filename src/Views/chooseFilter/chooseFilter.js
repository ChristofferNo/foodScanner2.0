import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import NextStepBtn from "../../components/nextStepButton";
import DropDown from "../../components/dropDown";
import CuisineModal from "./cusineModal";
import FilterModal from "./filterModal";
import GoBackBtn from "../../components/goBackBtn";
import apiService from "../../services/apiService";

export default function ChooseFilter({ navigate }) {
  // Fetch cuisnes and filters from mongo
  const [cuisines, setCuisines] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchCuisinesAndFilters = async () => {
      try {
        const cuisinesRes = await apiService.get("/mongo/get-cuisines");
        setCuisines(cuisinesRes.data);
        const filterRes = await apiService.get("/mongo/get-filters");
        setFilters(filterRes.data);
      } catch (err) {
        setError("Failed to fetch cuisines");
        console.error(err);
      }
    };

    fetchCuisinesAndFilters();
  }, []);

  const cuisineModalRef = useRef(null);
  const filterModalRef = useRef(null);

  const openCuisineModal = () => {
    if (cuisineModalRef.current) {
      cuisineModalRef.current.openModal();
    }
  };

  const openFilterModal = () => {
    if (filterModalRef.current) {
      filterModalRef.current.openModal();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <GoBackBtn
          navigate={navigate} // Skickar navigation-funktionen
          navigateTo="HomePage"
        />
      </View>

      <View style={styles.cusine}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Cuisine</Text>
          <Pressable onPress={openCuisineModal}>
            <Text style={styles.viewAll}>View All</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {cuisines.slice(0, 15).map((item, i) => (
            <View
              key={item._id}
              style={[
                styles.cuisineCard,
                i === 0 && styles.first, // Lägg till extra stil för första elementet
                i === 14 && styles.last,
              ]}
            >
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <CuisineModal ref={cuisineModalRef} />

      {/* Filter */}

      <View style={styles.filter}>
        <View style={[styles.textContainer, styles.filterTextContainer]}>
          <Text style={styles.header}>Filter</Text>
          <Pressable onPress={openFilterModal}>
            <Text style={styles.viewAll}>View All</Text>
          </Pressable>
        </View>
        <View style={styles.filterCardContainer}>
          {filters.slice(0, 9).map((item) => (
            <View key={item._id} style={styles.filterCard}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <FilterModal ref={filterModalRef} />

      {/* Dropdown */}

      <View style={styles.options}>
        <DropDown />
      </View>

      {/* nextBtn */}

      <View style={styles.lower}>
        <NextStepBtn
          navigate={navigate}
          lowerText="Load Recipe"
          navigateTo="TestPage"
        />
      </View>
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
    padding: 32,
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

  cusine: {},

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 32,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
  },

  first: {
    marginLeft: 32,
  },

  last: {
    marginRight: 28,
  },

  horizontalScroll: {
    paddingVertical: 32,
  },

  cuisineCard: {
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    marginRight: 4,
    borderRadius: 8,
  },

  //---------Filter----------//

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
    gap: 10,
  },

  filterCard: {
    backgroundColor: "lightgrey",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginVertical: 4,
    borderRadius: 16,
  },

  //--------- Options ----------//

  options: {
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  dishOptionsText: {
    fontWeight: "bolder",
    fontSize: 16,
  },

  //--------- Options ----------//

  lower: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 32,
  },
});
