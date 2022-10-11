import { View, Text, TextInput, Button, StyleSheet } from "react-native-web";
import { useEffect, useState } from "react";

const Questao02 = () => {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();

  const mais = ()=>{
    setResultado(parseFloat(numero1) + parseFloat(numero2))
  }
  const menos = ()=>{
    setResultado(parseFloat(numero1) - parseFloat(numero2))
  }
  const multiplicar = ()=>{
    setResultado(parseFloat(numero1) * parseFloat(numero2))
  }
  const dividir = ()=>{
    setResultado(parseFloat(numero1) / parseFloat(numero2))
  }

  return (
    <View>
      <Text style={styles.titulo}>Inputs</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        value={numero1}
        onChangeText={(numero1) => {
          setNumero1(numero1);
        }}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        value={numero2}
        onChangeText={(numero2) => {
          setNumero2(numero2);
        }}
      ></TextInput>

      <View style={styles.conteiner}>
        <View style={styles.button}>
          <Button title="+" onPress={mais} ></Button>
        </View>

        <View style={styles.button}>
          <Button title="-" onPress={menos}></Button>
        </View>

        <View style={styles.button}>
          <Button title="*" onPress={multiplicar} ></Button>
        </View>

        <View style={styles.button}>
          <Button title="/" onPress={dividir} ></Button>
        </View>
      </View>
      <Text>resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    padding: "15px",
    height: "20px",
    borderColor: "black",
    margin: "10px",
    border: "solid 2px",
    width: 250,
  },
  button: {
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: "center",
  },
});

export default Questao02;
