import { View, Text, Button } from "react-native";
import { estilos } from "../CSS/CSS";

const Perfil = (props) => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Perfil</Text>

      <Text style={estilos.semiTitulo}>Nome:</Text>
      <Text>{props.route.params.nome}</Text>

      <Text style={estilos.semiTitulo}>Idade:</Text>
      <Text>{props.route.params.idade}</Text>

      <Text style={estilos.semiTitulo}>Email:</Text>
      <Text>{props.route.params.email}</Text>

      <View style={estilos.botao}>
        <Button
          title="Home..."
          onPress={() => props.navigation.navigate("Home")}
        ></Button>
      </View>
    </View>
  );
};

export default Perfil;
