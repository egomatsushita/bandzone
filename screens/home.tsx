import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";

export default function Home() {
  const [loaded] = useFonts({
    nunito: require("../assets/fonts/Nunito-Regular.ttf"),
    nunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
  });
  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "nunito",
  },
});
