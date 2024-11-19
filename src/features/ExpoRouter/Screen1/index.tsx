import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Screen1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
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

export default Screen1;
