import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";
import { COLOR_MAIN_GREEN, COLOR_MAIN_BLUE, LINEAR_BTN_STYLE, COLOR_MAIN_TEXT, REG_CHARS } from "../constant";
import { useState } from "react";
import Slider from "@react-native-community/slider";

const LoanCalculatorScreen = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanMonth, setLoanMonth] = useState("");
  const [loanFee, setLoanFee] = useState("");
  const [loanPayment, setLoanPayment] = useState("");

  const changeLoanAmount = () => {
    setLoanAmount(loanAmount);
    setLoanMonth(0);
    setLoanFee(0);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>LoanCalculatorScreen</Text>
      <TextInput keyboardType="number-pad" returnKeyType={"done"} maxLength={8} style={{ marginBottom: 10 }} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Зээлийн хэмжээ" value={loanAmount} onChangeText={(loanAmount) => changeLoanAmount(loanAmount)} />
      <Text>Зээлийн хугацаа : {loanMonth}</Text>
      <Slider style={{ width: "100%", height: 40 }} value={loanMonth} minimumValue={0} maximumValue={60} thumbTintColor={COLOR_MAIN_GREEN} minimumTrackTintColor="#FFFFFF" step={12} maximumTrackTintColor="#000000" onValueChange={(loanMonth) => setLoanMonth(loanMonth)} />
      <Text>Зээлийн хүү : {loanFee}</Text>
      <Slider style={{ width: "100%", height: 40 }} value={loanFee} minimumValue={0} maximumValue={3} thumbTintColor={COLOR_MAIN_GREEN} minimumTrackTintColor="#FFFFFF" step={0.5} maximumTrackTintColor="#000000" onValueChange={(loanFee) => setLoanFee(loanFee)} />
      <View style={styles.paymentContainer}>
        <Text>Сарын төлөлт: {loanPayment}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoanCalculatorScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "center",
    paddingTop: StatusBar.currentHeight,
    width: "80%",
  },
  paymentContainer: {
    alignItems: "center",
  },
});
