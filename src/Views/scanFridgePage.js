import {
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera";
import Icon from "react-native-vector-icons/Ionicons";
import apiService from "../services/apiService";
import GoBackBtn from "../components/goBackBtn";

const { width } = Dimensions.get("window");

export default function ScanFridgePage({ showNavbar, navigate }) {
  const [pictureUri, setPictureUri] = useState(null);

  const cameraRef = useRef(null);
  async function takePicture() {
    const picture = await cameraRef.current.takePictureAsync();
    setPictureUri(picture.uri);
  }

  useEffect(() => {
    // Hide navbar when using camera
    showNavbar(false);

    // Show navbar when leaving the compoenent
    return () => showNavbar(true); // <-- Cleanup function that will run when the component is unmounted.
  }, [showNavbar]); // <-- Dependecy array that triggers useEffect every time one of the variables in the array changes, in this case the showNavbar.

  const sendPictureToScan = () => {
    const res = apiService.post("/chatgpt/scan-fridge");
    console.log("response from chat backend", res);
  };

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
      <GoBackBtn navigate={navigate} navigateTo="HomePage" />
      {!pictureUri && (
        <View style={styles.cameraContainer}>
          <CameraView
            style={{ minWidth: width, flex: 0.8 }}
            facing="back"
            ref={cameraRef}
          ></CameraView>
          <Pressable style={styles.btn} onPress={() => takePicture()}>
            <Icon name="camera" size={32} color={"lightgrey"}></Icon>
          </Pressable>
        </View>
      )}
      {pictureUri && (
        <View style={styles.pictureContainer}>
          <Image
            style={{ minWidth: width, flex: 0.8 }}
            source={{ uri: pictureUri }}
          ></Image>
          <View style={styles.pictureBtns}>
            <Pressable style={styles.btn} onPress={() => {}}>
              <Icon name="reload" size={32} color={"lightgrey"}></Icon>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => sendPictureToScan()}>
              <Icon name="arrow-forward" size={32} color={"lightgrey"}></Icon>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scanFridgeContainer: {
    flex: 1, // Gör att container fyller hela skärmen
    justifyContent: "space-evenly", // Centrerar innehållet vertikalt
    alignItems: "center", // Centrerar innehållet horisontellt
    width: "100%",
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pictureContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  pictureBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
