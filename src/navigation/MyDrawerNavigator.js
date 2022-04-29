import { createDrawerNavigator } from "@react-navigation/drawer";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Нүүр" component={HomeScreen} />
    <Drawer.Screen name="Бүртгүүлэх" component={SignupScreen} />
    <Drawer.Screen name="Логин" component={LoginScreen} />
  </Drawer.Navigator>
);
