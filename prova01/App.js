import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Questao01 from './components/Questao01/Questao01';
import Questao02 from './components/Questao02/Questao02';
import Questao04 from './components/Questao04/Questao04';
import Questao05 from './components/Questao05/Questao05';
import Questao03 from './components/Questão03/Questão03';

export default function App() {
  return (
    <View style={styles.container}>
        <Questao01></Questao01>
        <Questao02></Questao02>
        <Questao03></Questao03>
        {/* <Questao04></Questao04> */}
        <Questao05></Questao05>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
});
