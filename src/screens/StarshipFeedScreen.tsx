/* eslint-disable react-native/no-unused-styles */
import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native";

import { CardSpaceship } from "../components/Card";
import { useStarships } from "../hooks/useStarship";

export const StarshipFeedScreen = () => {
  const { data, error, isLoading } = useStarships();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CardSpaceship item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  elementList: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  model: {
    fontSize: 16,
  },
  crew: {
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
  },
  cost: {
    fontSize: 16,
  },
});
