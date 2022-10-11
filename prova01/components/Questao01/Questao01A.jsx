import { View, Text } from "react-native";

function Questao01A({ nome, sobrenome, curso }) {
  return (
    <View>
      <Text>
        <p>nome: {nome}</p>
        <p>sobrenome: {sobrenome}</p>
        <p>curso: {curso}</p>

      </Text>
    </View>
  );
}


export default Questao01A