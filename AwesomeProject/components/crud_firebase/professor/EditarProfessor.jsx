import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { estilos } from "../css/CSS";

import { firestoreDB } from "../firebase/firebase_config";
import serviceProfessor from "../service/serviceProfessor";

const EditarProfessor = (props)=>{

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [salario, setSalario] = useState('')

    useEffect(
        ()=>{
            serviceProfessor.recuperar(
                firestoreDB, (professor)=>{
                    setNome(professor.nome);
                    setCurso(professor.curso);
                    setSalario(professor.salario);
                },
                props.route.params.id
            )
        },
        []
    )

    const atualizar = ()=> {
        serviceProfessor.atualizar(
            firestoreDB,
            ()=>{
                alert('Professor atualizado')
                props.navigation.navigate('ListarProfessor')
            },
            props.route.params.id,
            {nome,curso,salario}
        )
    }

    return(
        <View style={estilos.container} >
            <Text style={estilos.titulo} >Editar Professor</Text>
            <TextInput
                style={estilos.input}
                placeholder="nome"
                value={nome}
                onChangeText={(nome)=> setNome(nome)}
                />

            <TextInput
                style={estilos.input}
                placeholder="curso"
                value={curso}
                onChangeText={(curso)=> setCurso(curso)}
                />

            <TextInput
                style={estilos.input}
                placeholder="salario"
                value={salario}
                keyboardType='numeric'
                onChangeText={(salario)=> setSalario(salario)}
                />

            <View style={estilos.botao} >
                <Button
                    title="Atualizar"
                    onPress={atualizar}
                    />
            </View>

            <View style={estilos.botao} >
                <Button
                    title="Home"
                    onPress={()=>props.navigation.navigate('HomeProfessor')}
                    />
            </View>

        </View>
    )
}

export default EditarProfessor;