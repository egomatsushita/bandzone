import { useFonts } from "expo-font";

import HomeStack from "./routes/homeStack";

export default function App() {
  const [loaded] = useFonts({
    nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!loaded) return null;

  return <HomeStack />;
}
