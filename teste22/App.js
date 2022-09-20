import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Cidades from "./components/Cidades/Cidades.js";
import Estudante from "./components/Estudante/Estudante.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {/* <Estudante
        nome="Castelo"
        curso="DD"
        universidade="UFC" ></Estudante> */}

        <Cidades></Cidades>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
