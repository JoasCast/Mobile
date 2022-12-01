import { View, Text, Button } from "react-native";
import { estilos } from "../css/CSS";
import ListarProfessor from "./ListarProfessor";

const HomeProfessor = (props) => {
    return(
        <View style={estilos.container} >
        <Text style={estilos.titulo} >
            Home Professor
        </Text>

        <View style={estilos.botao}>
            <Button
            title="listar"
            onPress={()=>props.navigation.navigate('ListarProfessor')}
            />
        </View>

        <View style={estilos.botao}>
            <Button
            title="criar"
            onPress={()=>props.navigation.navigate('CriarProfessor')}
            />
        </View>

    </View>
    )
}

export default HomeProfessor