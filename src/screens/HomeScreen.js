import { StyleSheet, Text, View, Image, Alert, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect, useCallback } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import checkUser from "../hooks/checkUser";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import * as Linking from "expo-linking";
import axios from "axios";

const HomeScreen = (props) => {
  const [userData, setUserData] = checkUser();
  const [eMongoliaData, setEMongoliaData] = checkUser();
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [grantAccess, setGrantAccess] = useState(false);
  const [result, setResult] = useState(null);

  const [userInfo, setUserInfo] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  // console.log("**********************", userData);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const getDataEMongolia = () => {
    console.log("getDataEMongolia");
    try {
      const result = axios.post(
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
    if (userData.dan != null) {
      try {
        console.log("IF", userData.dan);
        let result = await WebBrowser.openAuthSessionAsync(userData.dan.url, { showTitle: true, showInRecents: true });
        setResult(result.type);
        console.log("result", result);
        if (result.type === "dismiss") {
          console.log("dismiss");
          axios
            .post("https://services.digitalcredit.mn/api/sso/check", {
              state: userData.dan.state,
              channel: 1626864048648,
              vendor: "",
              type: 16082024283142,
            })
            .then((resp) => {
              console.log("opened opened opened", resp.data);
              setUserInfo(resp.data.data.info);
              setUserAddress(resp.data.data.address);
            });
          // getDataEMongolia();
        } else {
          console.log("asdasd");
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    } else {
      console.log("ELSE");

      axios
        .post(`https://services.digitalcredit.mn/api/sso/check`, {
          state: "РЖ93042817",
          channel: 1626864048648,
          vendor: "",
          type: 16082024283142,
        })
        .then(function (response) {
          setResult(response.data);
          if (result.status == 200) {
            Alert.alert("", "Таны мэдээллийг амжилттай татлаа", [
              {
                text: "Cancel",
                style: "cancel",
              },
              { text: "OK" },
            ]);
          }
        })
        .catch(function (error) {
          setError(err.message);
        });
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
    <ScrollView>
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
      <Text>{userInfo}</Text>
      <Text>userInfo : {userInfo && JSON.stringify(userInfo)}</Text>
      <Text>userAddress: {userAddress && JSON.stringify(userAddress)}</Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
