import { View, Text, Button } from "react-native";
import { estilos } from "../CSS/CSS";

const Resultado = (props) => {

  let peso = parseFloat(props.route.params.peso)
  let altura = parseFloat(props.route.params.altura)

  let resultado = parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))

  console.log(resultado)
  return (
    <View style={estilos.container} >
      <Text style={estilos.titulo}>Resultado</Text>

      <Text>resultado:{resultado}</Text>

      <View style={estilos.botao} >
        <Button
          title="Home..."
          onPress={() => props.navigation.navigate("Home")}
        ></Button>
      </View>
    </View>
  );
};

export default Resultado;