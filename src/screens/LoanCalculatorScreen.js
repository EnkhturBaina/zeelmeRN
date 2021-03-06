import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";
import { COLOR_MAIN_GREEN, COLOR_MAIN_BLUE, LINEAR_BTN_STYLE, COLOR_MAIN_TEXT, REG_CHARS } from "../constant";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import CurrencyInput from "react-native-currency-input";

const LoanCalculatorScreen = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanMonth, setLoanMonth] = useState("");
  const [loanFee, setLoanFee] = useState("");
  const [loanPayment, setLoanPayment] = useState("");

  const PMT = (ir, np, pv, fv, type) => {
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0) return -(pv + fv) / np;

    pvif = Math.pow(1 + ir, np);
    pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);

    if (type === 1) pmt /= 1 + ir;

    return pmt;
  };

  const changeLoanAmount = (loanAmount) => {
    setLoanAmount(loanAmount);
    setLoanMonth(0);
    setLoanFee(0);
  };

  const calcLoanPayment = (loanMonth, loanFee) => {
    setLoanMonth(loanMonth);
    setLoanFee(loanFee);
    if (loanMonth !== 0 && loanAmount !== 0) {
      setLoanPayment(Math.round(-PMT(parseFloat(loanFee) / 100, loanMonth, loanAmount)));
      if (loanPayment == Infinity) {
        setLoanPayment(0);
      }
    } else {
      setLoanPayment(0);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>LoanCalculatorScreen</Text>
      {/* <TextInput keyboardType="number-pad" returnKeyType={"done"} maxLength={12} style={{ marginBottom: 10 }} activeOutlineColor={COLOR_MAIN_GREEN} mode="outlined" label="Зээлийн хэмжээ" value={loanAmount} onChangeText={(loanAmount) => changeLoanAmount(loanAmount)} /> */}
      {/* <CurrencyInput onChangeValue={(loanAmount) => changeLoanAmount(loanAmount)} value={loanAmount} prefix="" delimiter="," separator="." precision={0} onChangeText={(loanAmount) => changeLoanAmount(loanAmount)} /> */}
      <Text>Зээлийн хугацаа : {loanMonth}</Text>
      <CurrencyInput
        value={loanAmount}
        onChangeValue={(formattedValue) => {
          changeLoanAmount(formattedValue);
          console.log(formattedValue);
        }}
        prefix=""
        delimiter=","
        separator="."
        precision={0}
      />
      {/* <Slider style={{ width: "100%", height: 40 }} value={loanMonth} minimumValue={0} maximumValue={60} thumbTintColor={COLOR_MAIN_GREEN} minimumTrackTintColor="#FFFFFF" step={12} maximumTrackTintColor="#000000" onValueChange={(loanMonth) => calcLoanPayment(loanMonth, loanFee)} />
      <Text>Зээлийн хүү : {loanFee}</Text>
      <Slider style={{ width: "100%", height: 40 }} value={loanFee} minimumValue={0} maximumValue={3} thumbTintColor={COLOR_MAIN_GREEN} minimumTrackTintColor="#FFFFFF" step={0.5} maximumTrackTintColor="#000000" onValueChange={(loanFee) => calcLoanPayment(loanMonth, loanFee)} /> */}
      <View style={styles.paymentContainer}>
        <Text>
          Сарын төлөлт: {loanPayment} --- {loanAmount}
        </Text>
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
