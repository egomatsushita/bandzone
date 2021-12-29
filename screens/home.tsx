import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import { globalStyles } from "../styles/globalStyles";

export default function Home() {
  const [loaded] = useFonts({
    nunito: require("../assets/fonts/Nunito-Regular.ttf"),
    nunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
  });
  if (!loaded) return null;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Home</Text>
    </View>
  );
}
