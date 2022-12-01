import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import { estilos } from "../CSS/CSS";

const IMC = (props) => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>IMC</Text>

      <Text>Peso</Text>
      <TextInput
        style={estilos.input}
        placeholder="Peso"
        value={peso}
        onChangeText={(peso) => {
          setPeso(peso);
        }}
      />
 
      <Text>Altura</Text>
      <TextInput
        style={estilos.input}
        placeholder="Altura"
        value={altura}
        onChangeText={(altura) => {
          setAltura(altura);
        }}
      />

      <View style={estilos.botao  } >
        <Button
          title="Resultado"
          onPress={() =>
            props.navigation.navigate("Resultado", {
              peso: peso,
              altura: altura,
            })
          }
        ></Button>
      </View>
    </View>
  );
};

export default IMC;
