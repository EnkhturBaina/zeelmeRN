import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { COLOR_MAIN_GREEN } from "../constant";

const MainDrawerButton = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.btnPress} style={styles.hamburgerContainer}>
        <Icon name="menu" size={30} color={COLOR_MAIN_GREEN} />
      </TouchableOpacity>
    </View>
  );
};

export default MainDrawerButton;

const styles = StyleSheet.create({
  hamburgerContainer: {
    padding: 10,
  },
});
