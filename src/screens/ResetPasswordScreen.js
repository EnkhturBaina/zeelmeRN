import { StyleSheet, Text, View, Alert } from "react-native";
import { useState } from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { COLOR_MAIN_GREEN } from "../constant";
import { TextInput, Button, Modal, Portal, Snackbar } from "react-native-paper";

const ResetPasswordScreen = () => {
  const [phone, setPhone] = useState("");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [errors, setErrors] = useState(true);

  const checkNumberLenght = (phone) => {
    setPhone(phone);
    if (phone.length === 8) {
      setNextBtnDisabled(false);
    } else {
      setNextBtnDisabled(true);
    }
  };
  const goStep2 = () => {
    if (phone === "") {
      setErrors(true);
    } else {
      setErrors(false);
    }
  };
  const progressStepsStyle = {
    activeStepIconBorderColor: "#686868",
    activeLabelColor: "#686868",
    activeStepNumColor: "white",
    activeStepIconColor: "#686868",
    completedStepIconColor: "#686868",
    completedProgressBarColor: "#686868",
    completedCheckColor: "#4bb543",
  };
  return (
    <View style={styles.mainView}>
      <ProgressSteps {...progressStepsStyle} activeStepIconBorderColor={COLOR_MAIN_GREEN} completedProgressBarColor={COLOR_MAIN_GREEN} completedStepIconColor={COLOR_MAIN_GREEN} completedCheckColor={COLOR_MAIN_GREEN}>
        <ProgressStep nextBtnText="Үргэлжлүүлэх" onNext={goStep2} errors={errors} nextBtnDisabled={nextBtnDisabled} nextBtnTextStyle={{ color: COLOR_MAIN_GREEN }}>
          <View style={{ alignItems: "center" }}>
            <Text>Та утасны дугаараа оруулна уу?</Text>
            <TextInput keyboardType="number-pad" returnKeyType={"done"} maxLength={8} style={[styles.generalInput, { marginBottom: 10 }]} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Утасны дугаар" value={phone} onChangeText={(phone) => checkNumberLenght(phone)} />
          </View>
        </ProgressStep>
        <ProgressStep previousBtnText="Буцах" finishBtnText="Үргэлжлүүлэх" previousBtnTextStyle={{ color: COLOR_MAIN_GREEN }} nextBtnTextStyle={{ color: COLOR_MAIN_GREEN }}>
          <View style={{ alignItems: "center" }}>
            <Text>Таны 949494 дугаарт илгээсэн 6 оронтой кодыг оруулж баталгаажуулна уу.</Text>
            <Text>Таны asdsad и-мэйл хаягруу илгээсэн 6 оронтой кодыг оруулж баталгаажуулна уу.</Text>
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
