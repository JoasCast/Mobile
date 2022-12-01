import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { estilos } from "../css/CSS";

import { firestoreDB } from "../firebase/firebase_config";
import serviceEstudante from "../service/serviceEstudante";

const EditarEstudante = (props)=>{

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [matricula, setMatricula] = useState('')

    useEffect(
        ()=>{
            serviceEstudante.recuperar(
                firestoreDB, (estudante)=>{
                    setNome(estudante.nome);
                    setCurso(estudante.curso);
                    setMatricula(estudante.matricula);


                },
                props.route.params.id
            )
        },
        []
    )

    const atualizar = ()=> {
        serviceEstudante.atualizar(
            firestoreDB,
            ()=>{
                alert('Estudante atualizado')
                props.navigation.navigate('listarEstudantes')
            },
            props.route.params.id,
            {nome,curso,matricula}
        )
    }

    return(
        <View style={estilos.container} >
            <Text style={estilos.titulo} >Editar Estudante</Text>
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
                placeholder="matricula"
                value={matricula}
                keyboardType='numeric'
                onChangeText={(matricula)=> setMatricula(matricula)}
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
                    onPress={()=>props.navigation.navigate('HomeEstudantes')}
                    />
            </View>

        </View>
    )
}

export default EditarEstudante;