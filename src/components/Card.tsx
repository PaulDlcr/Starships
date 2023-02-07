import { Card, Text } from "react-native-paper";
import { ViewStyle, TextStyle, Image } from "react-native";

interface Props {
  item: {
    name: string;
    model: string;
    crew: string;
    hyperdrive_rating: string;
    cost_in_credits: string;
  };
}

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

export const CardSpaceship = ({ item }: Props) => {
  return (
    <Card style={styles.elementList}>
      <Card.Content>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.crew}>{item.crew}</Text>
        <Text style={styles.rating}>{item.hyperdrive_rating}</Text>
        <Text style={styles.cost}>{item.cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
};