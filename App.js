import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import "react-native-gesture-handler";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import AppLoading from "expo-app-loading";
// import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";
import useFonts from "./src/useFonts";
const Drawer = createDrawerNavigator();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  // let [fontsLoaded] = useFonts({
  //   Nunito_400Regular,
  // });
  if (!IsReady) {
    return <AppLoading startAsync={LoadFonts} onFinish={() => SetIsReady(true)} onError={() => {}} />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" style={styles.container}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "My home" }} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{ title: "Нэвтрэх" }} />
        <Drawer.Screen name="Sign" component={SignupScreen} options={{ title: "Бүртгүүлэх" }} />
        <Drawer.Screen name="Reset" component={ResetPasswordScreen} options={{ title: "Нууц үг сэргээх" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Nunito_400Regular",
  },
});
