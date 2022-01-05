import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  text: {
    fontFamily: "nunito",
  },
});

export const navStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    color: "rgb(28, 28, 30",
  },
  menuIcon: {
    position: "absolute",
    left: 12,
  },
});
