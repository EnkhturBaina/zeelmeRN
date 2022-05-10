import { StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import MainDrawerButton from "../components/MainDrawerButton";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Зээлийн маркет",
          headerLeft: (props) => <MainDrawerButton btnPress={() => navigation.openDrawer()} />,
        })}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign" component={SignupScreen} />
      <Stack.Screen name="Reset" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({});
