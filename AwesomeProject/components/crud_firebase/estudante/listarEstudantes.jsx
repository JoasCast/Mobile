import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import { estilos } from "../css/CSS";

import { firestoreDB } from "../firebase/firebase_config";
import serviceEstudante from "../service/serviceEstudante";

const listarEstudantes = (props) => {
  const [estudantes, setEstudantes] = useState([]);

  useEffect(() => {
    serviceEstudante.listar(firestoreDB, (estudantes) => {
      console.log(estudantes);
      setEstudantes(estudantes);
    });
  }, []);

  const excluir = (id)=>{
    serviceEstudante.deletar(
      firestoreDB,
      (resultado)=>{
        let estudanteResultado = estudantes.filter(
          (estudante)=>estudante.id !== id
        )
        setEstudantes(estudanteResultado)
      },
      id)
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo} >Listar Estudantes</Text>
      <SafeAreaView>
        <FlatList
          data={estudantes}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={estilos.semiTitulo} >{item.nome}</Text>
                <Text>{item.curso}</Text>
                <Text>{item.matricula}</Text>

                <View style={estilos.botao} >
                  <Button title="editar"
                  onPress={()=>props.navigation.navigate('EditarEstudante', {id:item.id})} />
                </View>

                <View style={estilos.botao} >
                  <Button
                  title="excluir"
                  onPress={()=>excluir(item.id)}
                  />
                </View>


              </View>
            );
          }}
          keyExtractor={(item) =>item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default listarEstudantes;
