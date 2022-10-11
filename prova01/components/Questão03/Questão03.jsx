import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const Questao03 = () => {

    const[id,setId]=useState(0)
    const[lista, setLista]=useState('')

    useEffect(  
        ()=>{

            fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${id}`)
            .then((response)=>{
                return response.json()
            })
            .then((responseJson)=>{
                setLista(responseJson.results.map((nome)=>{
                    console.log(nome.name)
                    return (
                        nome.name + ' - '
                    )
                }))
            })
            .catch((error)=>{console.log(error)})

        }
        ,
        [id]
    )

  return (
    <View style={styles.conteiner}>
        <Text>{id}</Text>
        <View style={styles.nome}>{lista}</View>
      <View style={styles.botton}>
          <Button title="proximo" onPress={()=>setId((id+10))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  botton:{
    margin: 15,
    width: '60%'
  },
  nome:{
    fontSize:20,
    margin: 10,
    fontFamily: 'Arial, Helvetica, sans-serif',
  }
});

export default Questao03;