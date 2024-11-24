import {
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import { useEffect } from "react";
import { useCameraPermissions, CameraView } from "expo-camera";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

export default function ScanFridgePage({ showNavbar, navigate }) {
  useEffect(() => {
    // Hide navbar when using camera
    showNavbar(false);

    // Show navbar when leaving the compoenent
    return () => showNavbar(true); // <-- Cleanup function that will run when the component is unmounted.
  }, [showNavbar]); // <-- Dependecy array that triggers useEffect every time one of the variables in the array changes, in this case the showNavbar.

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
      <Pressable
        style={styles.goBack}
        onPress={() => {
          navigate("HomePage");
        }}
      >
        <Icon name="chevron-back-outline" size={24} />
        <Text>Go Back</Text>
      </Pressable>

      <CameraView
        style={[styles.camera, { minWidth: width }]}
        facing="back"
      ></CameraView>
      <Pressable style={styles.btn}>
        <Icon name="camera" size={32} color={"lightgrey"}></Icon>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 0.8,
    minWidth: 300,
  },
  scanFridgeContainer: {
    flex: 1, // Gör att container fyller hela skärmen
    justifyContent: "space-evenly", // Centrerar innehållet vertikalt
    alignItems: "center", // Centrerar innehållet horisontellt
    width: "100%",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "dashed",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  goBack: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
