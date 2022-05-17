import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";

const HomeScreen = (props) => {
  const [image, setImage] = useState(null);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [grantAccess, setGrantAccess] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const getBioPermission = () => {
    (async () => {
      const auth = await LocalAuthentication.authenticateAsync();
      if (auth.success) {
        setGrantAccess(true);
      } else {
        setGrantAccess(false);
      }
    })();
  };

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0.2,
    });

    if (!result.cancelled) {
      setImage(result.base64);
    }
  };
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0.2,
    });

    if (!result.cancelled) {
      setImage(result.base64);
    }
  };

  return (
    <View>
      <Text>Нүүүүүүүүүүүүүүр</Text>
      <Text>Then in App.js, use the useFonts hook to require the file. I've given it a name lobster-reg, which is the name that's used to refer to it in the StyleSheet.</Text>
      <Button icon="camera" mode="contained" onPress={() => props.navigation.navigate("Login")}>
        go Login TEST
      </Button>

      <Button onPress={showImagePicker}>Pick an image from library</Button>
      <Button onPress={openCamera}>Pick an image from camera roll</Button>
      {isBiometricSupported && <Button onPress={getBioPermission}>Check Bio</Button>}
      {image && <Image source={{ uri: "data:image/jpeg;base64," + image }} style={{ width: 200, height: 200 }} />}
      <Text>{grantAccess ? "PERMISSION CONFIRMED" : "PERMISSION NOT CONFIRMED"}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
