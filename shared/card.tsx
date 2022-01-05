import { View, StyleSheet } from "react-native";

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#aaa",
    margin: 12,
    borderRadius: 4,
    shadowRadius: 4,
    shadowColor: "#fff",
  },
});
