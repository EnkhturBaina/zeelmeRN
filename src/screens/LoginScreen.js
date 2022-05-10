import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button as MainButton } from "react-native";
import ZeelMeLogo from "../../assets/ZeelMeLogo.png";
import { COLOR_MAIN_GREEN, COLOR_MAIN_BLUE, LINEAR_BTN_STYLE } from "../constant";
import { TextInput, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.mainView}>
      <View style={styles.logoContainer}>
        <Image resizeMode="contain" source={ZeelMeLogo} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput keyboardType="numeric" style={styles.generalInput} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Утасны дугаар" value={phone} onChangeText={(phone) => setPhone(phone)} />
        <TextInput style={styles.generalInput} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Нууц үг" value={password} onChangeText={(password) => setPassword(password)} />

        <TouchableOpacity style={styles.touchableBtn} title="Нэвтрэх" color="transparent" onPress={() => console.log("Pressed" + phone + "---" + password)}>
          <LinearGradient
            start={{ x: 0.2, y: 0.8 }}
            end={{ x: 1, y: 1.0 }}
            style={LINEAR_BTN_STYLE}
            // Button Linear Gradient
            colors={[COLOR_MAIN_GREEN, COLOR_MAIN_BLUE]}
          >
            <Text style={{ color: "#fff" }}>Нэвтрэх</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.registerResetView}>
          <TouchableOpacity onPress={() => navigation.navigate("Sign")}>
            <Text style={{ color: "black" }}>Бүртгүүлэх</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
            <Text style={{ color: "black" }}>Нууц үг сэргээх</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    height: "30%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "60%",
  },
  inputContainer: {
    flex: 2,
    width: "60%",
  },
  generalInput: {
    height: 40,
    backgroundColor: "white",
  },
  touchableBtn: {},
  registerResetView: { paddingTop: 20, flexDirection: "row", justifyContent: "space-between" },
});
