import { View, Text, TextInput, Button, StyleSheet} from 'react-native';


const BotaoPegarexto = ()=>{

    return (
        <View style={styles.conteiner} >
            <Text style={styles.texto}  >
                Entrada de Texto
            </Text>
            <TextInput
            style={styles.input}
            placeholder='digite um texto'
             ></TextInput>
            <View>
                <Button style={styles.botao}  title='pegar texto' ></Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '10px'
    },
    botao:{
        alignItems: 'center',
        backgroundColor: 'blue',
        color: '#DCDCDCt',
    },
    input:{
        padding: '20px',
        height: '50px',
        borderColor: 'black',
        justifyContent: 'center',
        margin: '20px',
        border: 'solid 2px'
    }
})


export default BotaoPegarexto;
