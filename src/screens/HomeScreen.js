import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Нүүүүүүүүүүүүүүр</Text>
      <Button icon="camera" mode="contained" onPress={() => props.navigation.navigate("Login")}>
        go Login TEST
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
