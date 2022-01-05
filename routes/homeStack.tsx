import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { navStyles } from "../styles/globalStyles";

type ReviewItem = {
  title: string;
  rating: number;
  body: string;
  key: string;
};

export type RootStackParamList = {
  Home: undefined;
  ReviewDetails: ReviewItem;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function homeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: (header) => {
            console.log(header);
            return (
              <View style={navStyles.container}>
                <MaterialIcons
                  name="menu"
                  size={24}
                  style={navStyles.menuIcon}
                  onPress={() => header.navigation.openDrawer()}
                />
                <Text style={navStyles.text}>BandZone</Text>
              </View>
            );
          },
        }}
      />

      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
      />
    </Stack.Navigator>
  );
}
