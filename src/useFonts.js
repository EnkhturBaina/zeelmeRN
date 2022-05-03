import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    Pacifico: require("../assets/fonts/Nunito-Regular.ttf"),
    // All other fonts here
  });
};
