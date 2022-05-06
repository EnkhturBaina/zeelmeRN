import { StyleSheet, Text, View } from "react-native";
import React from "react";

const step1 = () => {
  return (
    <View>
      <Text>Methods Method Name Arguments Notes next() none use this method to jump on next step back() none use this method to go back on previous step saveState() Object use this method to save your state, in order to get in other steps resetState() none use this method to for reset state getState() none use this method to get you saved state by saveState() method getCurrentStep() none use this method to get current step getTotalSteps() none use this method to get total steps</Text>
    </View>
  );
};

export default step1;

const styles = StyleSheet.create({});
