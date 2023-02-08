import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { StarshipDetailScreen } from "../screens/StarshipDetailScreen";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
      <Stack.Screen name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailScreen} />
    </Stack.Navigator>
  );
}