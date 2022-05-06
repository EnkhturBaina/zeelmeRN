import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { COLOR_MAIN_GREEN } from "../constant";
import { TextInput, Button, Modal, Portal, ToggleButton } from "react-native-paper";

const ResetPasswordScreen = () => {
  const [phone, setPhone] = useState("");
  const goStep2 = () => {
    console.log("1", phone);
  };
  return (
    <View style={styles.mainView}>
      <ProgressSteps activeStepIconBorderColor={COLOR_MAIN_GREEN} completedProgressBarColor={COLOR_MAIN_GREEN} completedStepIconColor={COLOR_MAIN_GREEN} completedCheckColor={COLOR_MAIN_GREEN}>
        <ProgressStep nextBtnText="Үргэлжлүүлэх" onNext={goStep2}>
          <View style={{ alignItems: "center" }}>
            <Text>Та утасны дугаар эсвэл и-мэйл хаягаа оруулна уу?</Text>
            <TextInput keyboardType="number-pad" returnKeyType={"done"} maxLength={8} style={[styles.generalInput, { marginBottom: 10 }]} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Утасны дугаар / И-мэйл" value={phone} onChangeText={(phone) => setPhone(phone)} />
          </View>
        </ProgressStep>
        <ProgressStep previousBtnText="Буцах" finishBtnText="Үргэлжлүүлэх">
          <View style={{ alignItems: "center" }}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white",
  },
  generalInput: {
    height: 40,
    width: "80%",
    backgroundColor: "white",
    marginTop: 20,
  },
});
