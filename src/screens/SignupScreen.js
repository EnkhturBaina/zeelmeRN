import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button as MainButton, ScrollView } from "react-native";
import ZeelMeLogo from "../../assets/ZeelMeLogo.png";
import { COLOR_MAIN_GREEN, COLOR_MAIN_BLUE, LINEAR_BTN_STYLE, COLOR_MAIN_TEXT, REG_CHARS } from "../constant";
import { TextInput, Button, Modal, Portal, Provider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import PasswordStrengthMeterBar from "react-native-password-strength-meter-bar";

const SignupScreen = () => {
  const [regFirstChar, setRegFirstChar] = useState("A");
  const [regSecondChar, setRegSecondChar] = useState("A");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidColorObj, setPasswordValidColorObj] = useState({ color: "red", fontWeight: "normal" });
  const [passValidColorUpperObj, setPassValidColorUpperObj] = useState({ color: "red", fontWeight: "normal" });
  const [passValidColorSpecialObj, setPassValidColorSpecialObj] = useState({ color: "red", fontWeight: "normal" });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [whichRegChar, setWhichRegChar] = useState("");
  const regexSpecial = /^(?=.*[_\W]).+$/;
  const regexUpper = /^(?=.*[A-Z]).+$/;
  const [visible, setVisible] = useState(false);

  const showModal = (value) => {
    setWhichRegChar(value);
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  const setRegChar = (el, whichRegChar) => {
    if (whichRegChar === "first") {
      setRegFirstChar(el);
    } else {
      setRegSecondChar(el);
    }
    hideModal();
  };
  const validPass = (pass) => {
    pass.length > 8 ? setPasswordValidColorObj({ color: "black", fontWeight: "bold" }) : setPasswordValidColorObj({ color: "red", fontWeight: "normal" });
    regexUpper.test(pass) ? setPassValidColorUpperObj({ color: "black", fontWeight: "bold" }) : setPassValidColorUpperObj({ color: "red", fontWeight: "normal" });
    regexSpecial.test(pass) ? setPassValidColorSpecialObj({ color: "black", fontWeight: "bold" }) : setPassValidColorSpecialObj({ color: "red", fontWeight: "normal" });

    if (pass.length > 8 && regexUpper.test(pass) && regexSpecial.test(pass)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };
  const regModal = {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    flexWrap: "wrap",
  };

  return (
    <Provider>
      <View style={styles.mainView}>
        <View style={styles.logoContainer}>
          <Image resizeMode="contain" source={ZeelMeLogo} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.headerText}>Утасны дугаар нь таны нэвтрэх нэр болно</Text>
          <View style={styles.modalContainer}>
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={regModal}>
                {REG_CHARS.map((el, index) => {
                  return (
                    <Button key={index} style={{ margin: 3 }} onPress={() => setRegChar(el, whichRegChar)}>
                      {el}
                    </Button>
                  );
                })}
              </Modal>
            </Portal>
            <View style={styles.regContainer}>
              <TouchableOpacity style={styles.regCharContainer} onPress={() => showModal("first")}>
                <Text>{regFirstChar}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.regCharContainer} onPress={() => showModal("second")}>
                <Text>{regSecondChar}</Text>
              </TouchableOpacity>
              <TextInput keyboardType="number-pad" returnKeyType={"done"} maxLength={8} style={[styles.generalInput, { width: "60%" }]} activeOutlineColor={COLOR_MAIN_GREEN} mode="flat" value={phone} onChangeText={(phone) => setPhone(phone)} />
            </View>
          </View>
          <TextInput keyboardType="number-pad" returnKeyType={"done"} maxLength={8} style={[styles.generalInput, { marginBottom: 10 }]} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Утасны дугаар" value={phone} onChangeText={(phone) => setPhone(phone)} />
          {/* <PasswordStrengthMeterBar password={password} showStrenghtText={false} /> */}
          <Text style={passwordValidColorObj}>• 8 болон түүнээс дээш тэмдэг</Text>
          <Text style={passValidColorUpperObj}>• 1 том үсэг</Text>
          <Text style={passValidColorSpecialObj}>• 1 тусгай тэмдэгт (!@#$%^&*_).</Text>
          <TextInput
            style={[styles.generalInput, { marginTop: 10 }]}
            secureTextEntry
            activeOutlineColor={COLOR_MAIN_GREEN}
            mode="outlined"
            label="Нууц үг"
            value={password}
            onChangeText={(password) => {
              setPassword(password);
              validPass(password);
            }}
          />

          <TouchableOpacity style={styles.touchableBtn} title="Нэвтрэх" color="transparent" onPress={() => console.log("Pressed" + phone + "---" + password + " -------- " + isPasswordValid)}>
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
    </Provider>
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
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    width: "60%",
  },
  generalInput: {
    height: 40,
    backgroundColor: "white",
  },
  regContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  regCharContainer: {
    width: "20%",
    justifyContent: "center",
  },
  modalContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
