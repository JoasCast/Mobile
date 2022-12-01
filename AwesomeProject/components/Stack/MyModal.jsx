import { View, Text, Button } from "react-native-web";
import { estilos } from "../CSS/CSS";

const MyModal = (props) => {
  return (
    <View style={estilos.container} >
      <Text style={estilos.titulo} >meu modal!</Text>

      <View style={estilos.botao} >
        <Button
          title="Home"
          onPress={() => props.navigation.navigate("Cadastro")}
        ></Button>
      </View>
    </View>
  );
};

export default MyModal;
