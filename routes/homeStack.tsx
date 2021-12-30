import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListRenderItemInfo } from "react-native";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

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
        options={{ title: "BandZone" }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
      />
    </Stack.Navigator>
  );
}
