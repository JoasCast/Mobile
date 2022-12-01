import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import BotaoPegarexto from "./components/BotaoPegarTexto/BotaoPegarTexto.js";
import Cidades from "./components/Cidades/Cidades.js";
import Estudante from "./components/Estudante/Estudante.js";
import MyPokemon from "./components/Pokemon/MyPokemon.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {/* <Estudante
        nome="Castelo"
        curso="DD"
        universidade="UFC" ></Estudante> */}

        <MyPokemon></MyPokemon>

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
  },
});
