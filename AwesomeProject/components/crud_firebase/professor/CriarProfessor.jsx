import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { estilos } from "../css/CSS";

import { firestoreDB } from "../firebase/firebase_config";
import serviceProfessor from "../service/serviceProfessor";

const CriarProfessor = (props) => {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [salario, setSalario] = useState('');

  const adicionar = () => {
    console.log(nome, curso, salario)
    serviceProfessor.criar(
      firestoreDB,
      (id) => {
        alert(`Professor ${id} inserido`)
        props.navigation.navigate("ListarProfessor");
      },
      { nome,curso,salario }
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Criar Professor</Text>
      <TextInput
        style={estilos.input}
        placeholder="nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />

      <TextInput
        style={estilos.input}
        placeholder="curso"
        value={curso}
        onChangeText={(curso) => setCurso(curso)}
      />

      <TextInput
        style={estilos.input}
        placeholder="salario"
        value={salario}
        keyboardType="numeric"
        onChangeText={(salario) => setSalario(salario)}
      />

      <View style={estilos.botao}>
        <Button title="Adicionar" onPress={adicionar} />
      </View>

      <View style={estilos.botao}>
        <Button
          title="Home"
          onPress={() => props.navigation.navigate("HomeProfessor")}
        />
      </View>
    </View>
  );
};

export default CriarProfessor;
