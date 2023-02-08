import { Card, Text } from "react-native-paper";
import { ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";


interface Props {
    name: string;
    model: string;
    crew: string;
    hyperdrive_rating: string;
    cost_in_credits: string;
}


export const CardSpaceship = ({ name,model,crew,hyperdrive_rating,cost_in_credits }: Props) => {

  const navigation = useNavigation<any>();

  function navigateToStarshipDetails() {  
    navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, { 
      name: [name],
      model: [model],
      crew: [crew],
      hyperdrive_rating: [hyperdrive_rating],
      cost_in_credits: [cost_in_credits], });
  }
  
  return (
    <TouchableOpacity onPress={navigateToStarshipDetails}>
      <Card style={styles.elementList}>
        <Card.Content>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.model}>{model}</Text>
          <Text style={styles.crew}>{crew}</Text>
          <Text style={styles.rating}>{hyperdrive_rating}</Text>
          <Text style={styles.cost}>{cost_in_credits}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = {
  elementList: {
    margin: 10,
  } as ViewStyle,
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  } as TextStyle,
  model: {
    fontSize: 14,
    marginBottom: 5,
  } as TextStyle,
  crew: {
    fontSize: 14,
    marginBottom: 5,
  } as TextStyle,
  rating: {
    fontSize: 14,
    marginBottom: 5,
  } as TextStyle,
  cost: {
    fontSize: 14,
    marginBottom: 5,
  } as TextStyle,
};
