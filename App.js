import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import "react-native-gesture-handler";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
