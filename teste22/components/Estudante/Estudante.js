import { View, Text } from "react-native";

function Estudante({nome, curso, universidade}) {
  return (
    <View>
      <Text>
        Joas Castelo
        <p>nome: {nome} </p>
        <p>curso: {curso} </p>
        <p>universidade: {universidade} </p>
      </Text>
    </View>
  );
}

export default Estudante;
