import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const MyPokemon = () => {

    const[id,setId]=useState(1)
    const[name, setName]=useState('')
    const[front, setFront]=useState('')
    const[back, setBack]=useState('')

    useEffect(
        ()=>{

            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response)=>{
                return response.json()
            })
            .then((responseJson)=>{
                console.log(responseJson.id )
                setName(responseJson.name)
                setFront(responseJson.sprites.front_default)
                setBack(responseJson.sprites.back_default)
            })
            .catch((error)=>{console.log(error)})

        }
        ,
        [id]
    )

  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Pokedex</Text>
        <Text style={{fontSize: 20}}>{name.toUpperCase()}</Text>
        <Text>{id}</Text>
      <View style={styles.images}>
        <Image
          source={{
            uri: front ,
            width: 150,
            height: 150,
          }}
        />
        <Image
          source={{
            uri: back ,
            width: 150,
            height: 150,
          }}
        />
      </View>
      <View style={styles.bottons}>
        <View style={styles.botton} >
          <Button title="voltar" onPress={()=>setId(
            (id===1)? 905 : id-1
          )} />
        </View>
        <View style={styles.botton} >
          <Button title="avançar" onPress={()=>setId(
            (id===905)? 1 : id+1
          )} />
        </View>
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
  images: {
    flexDirection: "row",
  },
  bottons: {
    flexDirection: "row",
    justifyContent: 'center'
  },
  botton:{
    margin: 15,
    width: '60%'
  }
});

export default MyPokemon;
