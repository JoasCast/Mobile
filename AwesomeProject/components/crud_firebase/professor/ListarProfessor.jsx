import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import { estilos } from "../css/CSS";

import { firestoreDB } from "../firebase/firebase_config";
import serviceProfessor from "../service/serviceProfessor";

const ListarProfessor = (props) => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    serviceProfessor.listar(firestoreDB, (professores) => {
      setProfessores(professores);
    });
  }, []);

  const excluir = (id) => {
    serviceProfessor.deletar(
      firestoreDB,
      (resultado) => {
        let professorResultado = professores.filter(
          (professor) => professor.id !== id
        );
        setProfessores(professorResultado);
      },
      id
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Listar Professor</Text>

      <SafeAreaView>
        <FlatList
          data={professores}
          renderItem={({ item }) => {
            return (
              <View style={estilos.container}>
                <Text style={estilos.semiTitulo}>Nome: {item.nome}</Text>
                <Text>Curso: {item.curso}</Text>
                <Text>Salario: {item.salario}</Text>

                <View style={estilos.botao}>
                  <Button
                    title="atualizar"
                    onPress={() =>
                      props.navigation.navigate("EditarProfessor", {
                        id: item.id,
                      })
                    }
                  />
                </View>

                <View style={estilos.botao}>
                  <Button
                    title="excluir"
                    onPress={() => {
                      excluir(item.id);
                    }}
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListarProfessor;
