import { StyleSheet, View, Text } from "react-native";

export default function ReviewDetails() {
  return (
    <View style={styles.container}>
      <Text>ReviewDetails</Text>
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
});
