import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>this is home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
