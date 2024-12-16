import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Eller annan ikonbibliotek om du använder det

const DropDown = () => {
  // State för att hålla reda på de valda alternativen för varje menyval
  const [selectedOptions, setSelectedOptions] = useState({
    dish: "Lunch", // Förvalt alternativ istället för null
    people: "2", // Förvalt alternativ istället för null
    time: "30min", // Förvalt alternativ istället för null
  });

  // State för att kontrollera om en sektion är öppen
  const [visibleOptions, setVisibleOptions] = useState({
    dish: false,
    people: false,
    time: false,
  });

  // Toggle för att visa eller dölja alternativ baserat på vilken sektion som trycks
  const toggleVisibility = (option) => {
    setVisibleOptions((prev) => ({
      dish: false,   // Stäng andra menyer
      people: false, // Stäng andra menyer
      time: false,   // Stäng andra menyer
      [option]: !prev[option],  // Byt synlighet för den aktuella sektionen
    }));
  };

  
  const handleOptionSelect = (option, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: value,
    }));

    setVisibleOptions((prev) => ({
      ...prev,
      [option]: false,
    }));
  };

  const people = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
    { id: 6, label: "6" },
  ];

  const dishes = [
    { id: 1, label: "Breakfast" },
    { id: 2, label: "Lunch" },
    { id: 3, label: "Dinner" },
    { id: 4, label: "Apertif" },
  ];

  const times = [
    { id: 1, label: "15min" },
    { id: 2, label: "Under 30min" },
    { id: 3, label: "1h" },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.dishOptions}
          onPress={() => toggleVisibility('dish')}
        >
          <Text style={styles.dishOptionsText}>Meal</Text>
          <Text style={styles.selectedText}>
            {selectedOptions.dish}
          </Text>
        </TouchableOpacity>

        {/* Ikoner */}
        <TouchableOpacity
          onPress={() => toggleVisibility('people')}
          style={styles.dishOptions}
        >
          <Icon name="people-outline" size={24} />
          <Text style={styles.selectedText}>
            {selectedOptions.people}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleVisibility('time')}
          style={styles.dishOptions}
        >
          <Icon name="time-outline" size={24} />
          <Text style={styles.selectedText}>
            {selectedOptions.time}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Visa alternativ baserat på vald knapp */}
      {visibleOptions.dish && (
        <View style={styles.optionsList}>
          {dishes.map((dish) => (
            <TouchableOpacity
              key={dish.id}
              onPress={() => handleOptionSelect('dish', dish.label)}
            >
              <Text style={styles.selectableOptions}>{dish.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {visibleOptions.people && (
        <View style={styles.optionsList}>
          {people.map((person) => (
            <TouchableOpacity
              key={person.id}
              onPress={() => handleOptionSelect('people', person.label)}
            >
              <Text  style={[styles.selectableOptions, styles.circle]}>{person.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {visibleOptions.time && (
        <View style={styles.optionsList}>
          {times.map((time) => (
            <TouchableOpacity
              key={time.id}
              onPress={() => handleOptionSelect('time', time.label)}
            >
              <Text  style={styles.selectableOptions}>{time.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  dishOptions: {
    alignItems: "center",
  },
  dishOptionsText: {
  },
  optionsList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  selectedContainer: {

  },
  selectedText: {
    
  },
  selectableOptions: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16
  },
  circle: {
    paddingVertical: 12.5,
    paddingHorizontal: 17.5,
    borderRadius: "50%"
  }
});

export default DropDown;
