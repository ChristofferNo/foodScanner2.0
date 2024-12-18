import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import React from 'react'

const GoBackBtn = ({ navigate,navigateTo }) => {
    return (
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigate(navigateTo)}
        >
        <Icon name="chevron-back-outline" size={24} />
        <Text>Go Back</Text>
      </TouchableOpacity>
    );
  };
  

  const styles = StyleSheet.create({
    goBack: {
      flexDirection: "row",
      alignItems: "center",
      width: "25%",
      marginTop: 16,
    },
  });
  
  export default GoBackBtn;