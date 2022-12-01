import { View, Text, Button } from "react-native";
import { estilos } from "../css/CSS";

const HomeEstudantes = (props)=>{
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo} >Estudante Home</Text>

            <View style={estilos.botao} >
                <Button
                    title="Adicionar"
                    onPress={()=>props.navigation.navigate('CriarEstudante')}
                    />
            </View>

            <View style={estilos.botao} >
                <Button
                    title="Listar"
                    onPress={()=>props.navigation.navigate('listarEstudantes')}
                    />
            </View>

            <View style={estilos.botao} >
                <Button
                    title="Professor"
                    onPress={()=>props.navigation.navigate('HomeProfessor')}
                    />
            </View>

        </View>
    )
}
export default HomeEstudantes;