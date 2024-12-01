import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function NavBar({ navigate }) {
  const navIcons = [
    { id: "Home", icon: "home-outline", navigation: "HomePage" },
    { id: "Explore", icon: "search-outline", navigation: "ExplorePage" },
    { id: "Saved", icon: "bookmark-outline", navigation: "SavedPage" },
    { id: "Profile", icon: "person-outline", navigation: "ProfilePage" },
  ];

  return (
    <View style={styles.navBar}>
      {navIcons.map((item) => (
        <Pressable
          key={"navbar-" + item.id}
          style={styles.navItem}
          onPress={() => {
            navigate(item.navigation);
          }}
        >
          <Icon
            name={item.icon}
            size={24}
            color="#333"
            style={styles.navIcon}
          />
          <Text style={styles.navText}>{item.id}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingBottom: 16,
    width: "100%",

    borderTopWidth: 1, // Lägg till en top-border med tjockleken 1
    borderTopColor: "lightgrey", // Färgen på top-border
    borderTopStyle: "dashed",
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
