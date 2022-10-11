import { View, Text } from "react-native";
import Questao01A from "./Questao01A";
import Questao01B from "./Questao01B";

function Questao01() {
  return (
    <View>
      <Questao01A
        nome='Joás'
        curso='DD'
        sobrenome='Castelo'
        ></Questao01A>

        <Questao01B></Questao01B>
        
    </View>
  );
}


export default Questao01