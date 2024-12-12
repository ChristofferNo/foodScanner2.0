import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  Dimensions,
  Animated,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GeneralButton from "../components/generalButton";
import NextStepBtn from "../components/nextStepButton";

const { width } = Dimensions.get("window");

export default function AddIngredient({ navigate }) {
  const insets = useSafeAreaInsets(); // Get safe area padding values
  const containerPadding = 32;
  const modalInset = 32 + insets.top;

  console.log("modalInset", modalInset);

  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(width)).current;

  const openModal = () => {
    setModalVisible(true);

    // Starta animationen
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setModalVisible(false));
  };

  const [text, setText] = useState("");
  const [modalIngredients, setModalIngredients] = useState([]); // Temporary ingredients list in the modal
  const [ingredients, setIngredientsState] = useState([]); // Main list of ingredients

  useEffect(() => {
    if (modalIngredients.length > 0) {
      console.log("Updated Ingredients:", modalIngredients);
    }
  }, [modalIngredients]);

  // Add an ingredient with a unique ID
  const pushItem = () => {
    if (text.trim()) {
      setModalIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: Date.now().toString(), name: text }, // Create an object with a unique ID and the text
      ]);
      setText("");
    }
  };

  // Remove an ingredient by its ID
  const sliceItem = (id, setArrayState) => {
    setArrayState(
      (prevIngredients) =>
        prevIngredients.filter((ingredient) => ingredient.id !== id) // Filter by ID instead of text
    );
  };

  // Save ingredients from modal to the main list
  const saveModalArray = () => {
    setIngredientsState((prevIngredients) => [
      ...prevIngredients,
      ...modalIngredients,
    ]);
    console.log("Updated realIngredients:", ingredients); // Note: Updated state won't appear immediately here
    setModalIngredients([]); // Clear modal ingredients
    closeModal();
  };

  return (
    <View style={[styles.container, { padding: containerPadding }]}>
      <View style={styles.upper}>
        <Pressable
          style={styles.goBack}
          onPress={() => {
            navigate("HomePage");
          }}
        >
          <Icon name="chevron-back-outline" size={24} />
          <Text>Go Back</Text>
        </Pressable>
      </View>

      <View style={styles.middle}>
        <Text style={styles.middleHeader}>Items In Your Fridge</Text>
        {ingredients.map((item) => (
          <View key={item.id} style={styles.ingredientCard}>
            <Text style={styles.ingredientText}>{item.name}</Text>
            <Pressable onPress={() => sliceItem(item.id, setIngredientsState)}>
              <Icon name="close-outline" size={24} />
            </Pressable>
          </View>
        ))}

        <GeneralButton
          title="Add item"
          onPress={openModal}
        />

      </View>
      <View style={styles.lower}>
        <NextStepBtn
          navigate={navigate} // Skickar navigation-funktionen
          lowerText="Choose filter and load recipe"
          navigateTo="ChooseFilter" // Skärmen som ska navigeras till
        />
      </View>

      {/* Modal */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="none"
        onRequestClose={closeModal}
      >
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateX: slideAnim }] },
            { paddingVertical: modalInset },
          ]}
        >
          <View style={styles.closeCheckContainer}>
            <Pressable onPress={closeModal}>
              <Icon
                name="chevron-back-outline"
                size={24}
                style={styles.closeBtn}
              />
            </Pressable>
            <Pressable onPress={saveModalArray}>
              <Icon
                name="checkmark-outline"
                size={24}
                style={styles.checkBtn}
              />
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type ingredients"
              style={styles.ingredientInput}
              value={text}
              onChangeText={setText}
            />
            <Icon name="add-outline" size={24} onPress={pushItem} />
          </View>

          <View style={styles.modalIngredientContainer}>
            <Text>Add Ingredients ({modalIngredients.length})</Text>
            <View style={styles.modalIngredientContainer}>
              {modalIngredients.map((ingredient) => (
                <View key={ingredient.id} style={styles.ingredientCard}>
                  <Text style={styles.ingredientText}>{ingredient.name}</Text>
                  <Pressable
                    onPress={() =>
                      sliceItem(ingredient.id, setModalIngredients)
                    }
                  >
                    <Icon name="close-outline" size={24} />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  upper: {
    flex: 2,
  },

  goBack: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
    backgroundColor: "white",
  },

  stepText: {
    alignItems: "flex-start",
    marginTop: 32,
  },
  upperText: {
    textAlign: "center",
  },

  middle: {
    flex: 4,
  },
  middleHeader: {
    marginBottom: 32,
    fontSize: 20,
    fontWeight: "bold",
  },
  
  lower: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  btnTextContainer: {
    width: 126,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerText: {
    textAlign: "center",
    marginBottom: 16,
  },
  nextStepBtn: {
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingVertical: 4,
    width: "60%",
    borderRadius: 16,
  },

  //MODAL STYLING

  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "100%",
    paddingHorizontal: 32,
  },

  closeCheckContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: 16,
  },
  closeBtn: {
    marginLeft: 12,
  },
  checkBtn: {
    marginRight: 12,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: 16,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "dashed",
    borderRadius: 8,
  },
  ingredientInput: {
    backgroundColor: "none",
    borderRadius: 8,
    height: "100%",
  },

  modalIngredientContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 16,
  },
  ingredientCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "dashed",
    borderRadius: 8,
  },
});
