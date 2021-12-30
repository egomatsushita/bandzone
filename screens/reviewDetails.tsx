import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { globalStyles } from "../styles/globalStyles";
import { RootStackParamList } from "../routes/homeStack";

type Props = NativeStackScreenProps<RootStackParamList, "ReviewDetails">;

export default function ReviewDetails({ route }: Props) {
  const { title, rating, body } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{title}</Text>
      <Text style={globalStyles.text}>{body}</Text>
      <Text style={globalStyles.text}>{rating}</Text>
    </View>
  );
}
