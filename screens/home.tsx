import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../routes/homeStack";
import { globalStyles } from "../styles/globalStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Home</Text>
      <Button
        title="Go to Review Details"
        onPress={() => navigation.navigate("ReviewDetails")}
      />
    </View>
  );
}
