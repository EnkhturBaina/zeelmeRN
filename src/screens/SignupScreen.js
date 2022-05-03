import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button as MainButton } from "react-native";
import ZeelMeLogo from "../../assets/ZeelMeLogo.png";
import { COLOR_MAIN_GREEN, COLOR_MAIN_BLUE, LINEAR_BTN_STYLE, COLOR_MAIN_TEXT } from "../constant";
import { TextInput, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const SignupScreen = () => {
  const [regFirstChar, setRegFirstChar] = useState("A");
  const [regSecondChar, setRegSecondChar] = useState("A");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.mainView}>
      <View style={styles.logoContainer}>
        <Image resizeMode="contain" source={ZeelMeLogo} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>Утасны дугаар нь таны нэвтрэх нэр болно</Text>
        <View style={{ flexDirection: "row", width: "100%", alignItems: "center", marginBottom: 20 }}>
          <Button
            mode="outlined"
            style={{
              height: 40,
              width: 20,
              backgroundColor: "white",
            }}
            onPress={() => console.log("Pressed")}
          >
            {regFirstChar}
          </Button>
          <Button mode="outlined" style={styles.generalInput}>
            {regSecondChar}
          </Button>
          <TextInput keyboardType="numeric" style={styles.generalInput} activeOutlineColor={COLOR_MAIN_GREEN} mode="flat" value={phone} onChangeText={(phone) => setPhone(phone)} />
        </View>
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
            <Text style={{ color: "#fff" }}>Бүртгүүлэх</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

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
  headerText: {
    color: COLOR_MAIN_TEXT,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
  },
  inputContainer: {
    flex: 2,
    width: "60%",
  },
  generalInput: {
    height: 40,
    backgroundColor: "white",
  },
});
