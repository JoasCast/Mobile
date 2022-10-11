import { View, Text, StyleSheet } from "react-native";

function Questao01B (){
    return(
        <View>
            <Text style={style.titulo} >Disciplinas</Text>
            <Text>
                {retornoMap}
            </Text>

        </View>
    )
}

const disciplinas = ['Mobile ', 'PIV ', 'CDP ', 'DI ']

const retornoMap = disciplinas.map((disciplina) => {
    console.log(disciplina);

    return (
        <View>
            <p>{disciplina}</p>
        </View>
    )
})

const style = StyleSheet.create({
    titulo:{
        fontSize: 30,
        fontWeight: "bold",
    }
})


export default Questao01B;