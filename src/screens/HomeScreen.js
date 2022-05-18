import { StyleSheet, Text, View, Image, Alert, Linking } from "react-native";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect, useCallback } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import checkUser from "../hooks/checkUser";
import * as WebBrowser from "expo-web-browser";
import axios from "axios";

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const HomeScreen = (props) => {
  const [userData, setUserData] = checkUser();
  const [eMongoliaData, setEMongoliaData] = checkUser();
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [grantAccess, setGrantAccess] = useState(false);
  const [result, setResult] = useState(null);

  // console.log("**********************", userData);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const getDataEMongolia = async () => {
    try {
      const result = await axios.post(
        {
          state: userData.dan.state,
          channel: 1626864048648,
          vendor: "",
          type: 16082024283142,
        },
        `https://services.digitalcredit.mn/api/sso/check`
      );
      console.log("setEMongoliaData ****************", result);

      // setEMongoliaData(result.data.data);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(userData.dan.url);
    console.log("result*/*/*/*", result);
    setResult(result);
    if (result.type == "opened") {
      getDataEMongolia();
    }
  };

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

      <Button onPress={_handlePressButtonAsync}>sso CHECK</Button>
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
