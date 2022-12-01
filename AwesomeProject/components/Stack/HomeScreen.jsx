import { View, Text, Button } from "react-native";

import { estilos } from "../CSS/CSS";

const HomeScreen = (props) => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Tela Home</Text>

      <View style={estilos.botao}>
        <Button
          title="Cadastro..."
          onPress={() => props.navigation.navigate("Cadastro")}
        ></Button>
      </View>

      <View style={estilos.botao}>
        <Button
          title="IMC..."
          onPress={() => props.navigation.navigate("IMC")}
        ></Button>
      </View>

      <View style={estilos.botao}>
        <Button
          title="Detalhes..."
          onPress={() => props.navigation.navigate("Detalhes")}
        ></Button>
      </View>
    </View>
  );
};

export default HomeScreen;
