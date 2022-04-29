import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

const HomeScreen = (props) => {
  return (
    <View>
      <Text>HomeScreens</Text>
      <Button icon="camera" mode="contained" onPress={() => props.navigation.navigate("Login")}>
        go Loginss
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
