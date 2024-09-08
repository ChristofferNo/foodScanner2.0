import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function InputBar() {
  // State för att lagra ingredienser
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Funktion för att lägga till en ingrediens
  const addIngredient = () => {
    if (inputValue.trim()) {
      setIngredients([...ingredients, inputValue.trim()]);
      console.log('Ingredients:', [...ingredients, inputValue.trim()]);
      setInputValue(''); // Rensa inputfältet
    }
  };
  //Funktion för att ta bort ingrediens 
  const deleteIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  // Hantera när Enter trycks på tangentbordet
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput
          style={styles.input}
          placeholder="Skriv ingredienser/matprodukter"
          value={inputValue}
          onChangeText={handleInputChange}
          onSubmitEditing={addIngredient} // Lägger till ingrediens när Enter trycks
        />
        <TouchableOpacity style={styles.button123} onPress={addIngredient}>
          <Text style={styles.buttonText}>Press</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.listContainer}
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => deleteIngredient(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>x</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  addItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#edeef0',
    borderRadius: 32,
    padding: 16,
    marginBottom: 16,
  },
  input: {
    textAlign: 'center',
    paddingLeft: 16,
    width: 320,
    outlineStyle: 'none',
    paddingRight: 16,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  button123: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
    elevation: 3,
    backgroundColor: '#edeef0',
    borderWidth: 1,
  },
  listContainer: {
    marginTop: 16,
  },
  listItem: {
    margin: 1,
    flexDirection: 'row',  // Gör att texten och knappen placeras horisontellt
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#edeef0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 32,
  },
  deleteButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});