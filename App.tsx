import { useFonts } from "expo-font";

import Navigator from "./routes/drawer";

export default function App() {
  const [loaded] = useFonts({
    nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!loaded) return null;

  return <Navigator />;
}
