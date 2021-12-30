import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

export type RootStackParamList = {
  Home: undefined;
  ReviewDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function homeStack() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
