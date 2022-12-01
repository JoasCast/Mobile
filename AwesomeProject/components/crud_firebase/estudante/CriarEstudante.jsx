import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { estilos } from "../css/CSS";

import { firestoreDB } from "../firebase/firebase_config";
import serviceEstudante from "../service/serviceEstudante";

const CriarEstudante = (props) => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [matricula, setMatricula] = useState("");

  const adicionar = () => {
    serviceEstudante.criar(
      firestoreDB,
      (id) => {
        alert(`Estudante ${id} inserido`)
        props.navigation.navigate("listarEstudante");
      },
      { nome, curso, matricula }
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Criar Estudante</Text>
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
        placeholder="matricula"
        value={matricula}
        keyboardType="numeric"
        onChangeText={(matricula) => setMatricula(matricula)}
      />

      <View style={estilos.botao}>
        <Button title="Adicionar" onPress={adicionar} />
      </View>

      <View style={estilos.botao}>
        <Button
          title="Home"
          onPress={() => props.navigation.navigate("HomeEstudantes")}
        />
      </View>
    </View>
  );
};

export default CriarEstudante;
