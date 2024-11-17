import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function NavBar({ navigate }) {

  
  return (
    <View style={styles.navBar}>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigate("HomePage");
        }}
      >
        <Icon
          name="home-outline"
          size={24}
          color="#333"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable style={styles.navItem}>
        <Icon
          name="search-outline"
          size={24}
          color="#333"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Explore</Text>
      </Pressable>
      <Pressable style={styles.navItem}>
        <Icon
          name="bookmark-outline"
          size={24}
          color="#333"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Saved</Text>
      </Pressable>
      <Pressable style={styles.navItem}>
        <Icon
          name="person-outline"
          size={24}
          color="#333"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingBottom: 32,
    position: "absolute",
    bottom: 0,
    width: "100%",

    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "dashed",
  },
  navIcon: {
    marginBottom: 8,
  },
  navText: {
    fontSize: 16,
  },
  navItem: {
    flexDirection: "column",
    alignItems: "center",
  },
});
