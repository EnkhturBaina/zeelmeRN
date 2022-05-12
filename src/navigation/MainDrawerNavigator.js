import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

import MainStackNavigation from "./MainStackNavigation";
import LoanCalculatorScreen from "../screens/LoanCalculatorScreen";

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Нүүр" component={MainStackNavigation} />
    <Drawer.Screen name="Login" component={LoginScreen} options={{ title: "Нэвтрэх" }} />
    <Drawer.Screen name="Sign" component={SignupScreen} options={{ title: "Бүртгүүлэх" }} />
    <Drawer.Screen name="Reset" component={ResetPasswordScreen} options={{ title: "Нууц үг сэргээх" }} />
    <Drawer.Screen name="LoanCalculator" component={LoanCalculatorScreen} options={{ title: "Зээлийн тооцоолуур" }} />
  </Drawer.Navigator>
);

export default MainDrawerNavigator;
