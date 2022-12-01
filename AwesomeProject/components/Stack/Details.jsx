import { View, Text, Button } from "react-native";

import { estilos } from "../CSS/CSS";

const Details = (props) => {
  return (
    <View style={estilos.container} >
      <Text style={estilos.titulo}>Detalhes</Text>
      <Text>
        hahahahahahhahahahahahahahahahahahahahahahahahahahah SOBRE NÓS
        hahahahahahhahahahahahahahahahahahahahahahahahahahah
      </Text>
      <View style={estilos.botao} >
        <Button
          title="Home..."
          onPress={() => props.navigation.navigate("Home")}
        ></Button>
      </View>
    </View>
  );
};

export default Details;
