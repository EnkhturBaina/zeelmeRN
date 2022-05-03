import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Нүүүүүүүүүүүүүүр</Text>
      <Text>Then in App.js, use the useFonts hook to require the file. I've given it a name lobster-reg, which is the name that's used to refer to it in the StyleSheet.</Text>
      <Button icon="camera" mode="contained" onPress={() => props.navigation.navigate("Login")}>
        go Login TEST
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
