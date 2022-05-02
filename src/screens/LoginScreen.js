import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button as MainButton } from "react-native";
import ZeelMeLogo from "../../assets/ZeelMeLogo.png";
import { COLOR_MAIN_GREEN, COLOR_MAIN_BLUE } from "../constant";
import { TextInput, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.mainView}>
      <View style={{ height: "30%", width: "80%", justifyContent: "center", alignItems: "center" }}>
        <Image resizeMode="contain" source={ZeelMeLogo} style={{ width: "60%" }} />
      </View>
      <View style={{ width: "60%" }}>
        <TextInput style={styles.generalInput} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Утасны дугаар" value={phone} onChangeText={(phone) => setText(phone)} />
        <TextInput style={styles.generalInput} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Нууц үг" value={password} onChangeText={(password) => setText(password)} />

        <LinearGradient
          start={{ x: 0.2, y: 0.8 }}
          end={{ x: 1, y: 1.0 }}
          style={{ width: "100%", marginTop: 20, alignItems: "center", padding: 5, borderRadius: 10 }}
          // Button Linear Gradient
          colors={[COLOR_MAIN_GREEN, COLOR_MAIN_BLUE]}
        >
          <TouchableOpacity title="Нэвтрэх" color="transparent" onPress={() => console.log("Pressed")}>
            <Text style={{ color: "#fff" }}>Нэвтрэх</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => console.log("Pressed")}>
            <Text style={{ color: "black" }}>Бүртгүүлэх</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Pressed")}>
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
  generalInput: {
    height: 40,
    backgroundColor: "white",
  },
});
