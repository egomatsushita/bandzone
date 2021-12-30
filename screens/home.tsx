import { View, Text, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";

import { RootStackParamList } from "../routes/homeStack";
import { globalStyles } from "../styles/globalStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  const reviews = [
    { title: "Pearl Jam", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "Nirvana", rating: 3, body: "lorem ipsum", key: "2" },
    { title: "Pantera", rating: 4, body: "lorem ipsum", key: "3" },
  ];

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={(review) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", review.item)}
          >
            <View>
              <Text style={globalStyles.text}>{review.item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
