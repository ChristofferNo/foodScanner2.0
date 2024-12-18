import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "../../components/modal";
import { cuisines } from "../../models/cusineFilterData";

const CuisineModal = React.forwardRef((_, ref) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCuisines, setFilteredCuisines] = useState(cuisines);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const results = cuisines.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCuisines(results);
  };

  return (
    <Modal ref={ref}>
      <View style={styles.modalContainer}>
        <Text style={styles.header}>All choosable cuisines</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search cuisines..."
            value={searchTerm} 
            onChangeText={handleSearch}
          />
          <TouchableOpacity>
            <Icon name="search-outline" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer}>
          {filteredCuisines.length === 0 ? (
            <Text>No cuisines found</Text>
          ) : (
            filteredCuisines.map((item) => (
              <Pressable style={styles.modalItem} key={item.id}>
                <Text>{item.name}</Text>
              </Pressable>
            ))
          )}
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "whitesmoke",
    width: "90%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 24,
  },
  searchInput: {
    width: "100%",
    height: "auto",
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  modalItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 75,
    padding: 8,
    backgroundColor: "lightgrey",
    borderRadius: 8,
  },
});

export default CuisineModal;
