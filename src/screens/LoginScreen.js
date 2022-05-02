import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { test } from "../constant";
import { COLOR_MAIN_GREEN } from "../constant";
import ZeelMeLogo from "../../assets/ZeelMeLogo.png";
const LoginScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={{ width: "50%" }}>
        <Image source={ZeelMeLogo} style={{ width: "100%" }} />
      </View>
      <Text style={{ color: COLOR_MAIN_GREEN }}>LoginScreen {test}</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
