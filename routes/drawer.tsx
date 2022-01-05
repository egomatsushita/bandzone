import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./homeStack";
import About from "../screens/about";
import { navStyles } from "../styles/globalStyles";

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            header: (header) => (
              <View style={navStyles.container}>
                <MaterialIcons
                  name="menu"
                  size={24}
                  style={navStyles.menuIcon}
                  onPress={() => header.navigation.openDrawer()}
                />
                <Text style={navStyles.text}>About</Text>
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
