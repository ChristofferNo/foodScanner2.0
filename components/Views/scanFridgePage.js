import { View, StyleSheet, Text, Button } from "react-native";
import { useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera";

export default function ScanFridgePage() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View>
        <Text>Loading permissions</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  return (
    <View style={styles.scanFridgeContainer}>
      <CameraView style={styles.camera} facing="back"></CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    width: 300,
    height: 540,
  },
  scanFridgeContainer: {
    flex: 1, // Gör att container fyller hela skärmen
    justifyContent: "center", // Centrerar innehållet vertikalt
    alignItems: "center", // Centrerar innehållet horisontellt
    width: "100%",

    borderWidth: 4,
    borderBlockColor: "red",
  },
});
