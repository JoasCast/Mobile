import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const Questao04 = () => {
  const [lista, setLista] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v2/region/africa?fields=name,population")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        let Populacao = responseJson.map((pais) => {
          return pais.population;
        });
        let maior = Math.max.apply(null, Populacao);
        setLista(
          responseJson.map((pais) => {

            if(maior == pais.population){
                return(<Text style={styles.textoSelect}>
                    Nome: {pais.name}
                    <br />
                    População: {pais.population}
                  </Text>)
            }

            return (
              <View>
                <Text style={styles.texto}>
                  Nome: {pais.name}
                  <br />
                  População: {pais.population}
                </Text>
              </View>
            );
          })
        );

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text style={styles.conteiner}>{lista}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    backgroundColor: "#19b8fc",
    fontSize: 20,
    width: 200,
    height: 100,
    padding: 3,
    color: "white",
    marginTop: 6,
  },
  textoSelect: {
    backgroundColor: "#0373a3",
    fontSize: 20,
    width: 200,
    height: 100,
    padding: 3,
    color: "white",
    marginTop: 6,
  },
  conteiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    flexDirection: "column",
  },
});

export default Questao04;
