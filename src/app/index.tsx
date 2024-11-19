import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Screens = [];

const App: React.FC = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
