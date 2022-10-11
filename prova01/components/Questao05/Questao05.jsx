import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";

const Questao05 = () => {
  const [lista, setLista] = useState();
  const [url, setUrl] = useState(
    "https://restcountries.com/v2/region/africa?fields=name,population"
  );

  const americas = () => {
    setUrl(
      "https://restcountries.com/v2/region/americas?fields=name,population"
    );
  };
  const asia = () => {
    setUrl("https://restcountries.com/v2/region/asia?fields=name,population");
  };

  useEffect(() => {
    fetch(url)
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
            if (maior == pais.population) {
              return (
                <Text style={styles.textoSelect}>
                  Nome: {pais.name}
                  <br />
                  População: {pais.population}
                </Text>
              );
            }

            return (
              <View style={styles.conteinerView}>
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
  }, [url]);

  return (
    <View>
      <Text style={styles.conteiner}>{lista}</Text>
      <View style={styles.conteinerButton}>
        <View style={styles.button}>
          <Button title="Americas" onPress={americas} />
        </View>
        <View style={styles.button}>
          <Button title="Asia" onPress={asia} />
        </View>
      </View>
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
  button: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  conteinerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    flexDirection: "row",
  },
});

export default Questao05;
