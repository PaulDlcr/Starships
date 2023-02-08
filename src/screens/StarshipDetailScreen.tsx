import { View } from "react-native";
import {
    Text,
    Chip,
    DataTable,
    List,
    MD3Colors
  } from "react-native-paper";

export const StarshipDetailScreen = ({route} : any) => {
    const { name, model, crew, hyperdrive_rating, cost_in_credits } = route.params;
    return (
        <View>
            <Text variant="displayLarge">{name}</Text>
            <Text variant="displayMedium">{model}</Text>
            <List.Icon icon="mdiSpeedometer"/>
        </View>

      );
}