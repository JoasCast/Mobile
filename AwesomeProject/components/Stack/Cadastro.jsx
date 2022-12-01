import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

import { estilos } from "../CSS/CSS";

const Cadastro = (props) => {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [email, setEmail] = useState();
  console.log(nome, idade, email);

  return (
    <View style={estilos.container} >
      <Text style={estilos.titulo} >Cadastro</Text>

      <TextInput
        style={estilos.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(nome) => {
          setNome(nome);
        }}
      ></TextInput>

      <TextInput
        style={estilos.input}
        placeholder="Idade"
        value={idade}
        onChangeText={(idade) => {
          setIdade(idade);
        }}
      ></TextInput>

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
      ></TextInput>

      <View style={estilos.botao} >
        <Button
          title="OK..."
          onPress={() =>
            props.navigation.navigate("Perfil", {
              nome: nome,
              idade: idade,
              email: email,
            })
          }
        ></Button>
      </View>

      <View style={estilos.botao}>
        <Button
          title="abrir modal"
          onPress={() => props.navigation.navigate("MyModal")}
        />
      </View>
    </View>
  );
};

export default Cadastro;
