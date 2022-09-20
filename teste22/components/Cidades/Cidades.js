import { Text, View, Button } from "react-native";

import { useState } from "react";

function Cidades() {
  const [paraipaba, setParaipaba] = useState(0);
  const [quixada, setQuixada] = useState(0);
  const [quixeramobim, setQuixeramobim] = useState(0);

  const aumentarParaipaba = () => {
    setParaipaba(paraipaba + 1);
  };

  const aumentarQuixada = () => {
    setQuixada(quixada + 1);
  };

  const aumentarQuixeramobim = () => {
    setQuixeramobim(quixeramobim + 1);
  };

  function vencedor() {
    if (paraipaba > quixada && paraipaba > quixeramobim) {
      alert("a cidade vencedora é Paraipaba");
    } else if (quixada > paraipaba && quixada > quixeramobim) {
      alert("a cidade vencedora é Quixadá");
    } else if (quixeramobim > paraipaba && quixeramobim > quixada) {
      alert("a cidade vencedora é Quixeramobim");
    } else if (quixeramobim == paraipaba && quixeramobim == quixada) {
      alert("empate (todos os votos foram iguais)");
    } else if (quixada == paraipaba && quixada != quixeramobim) {
      alert("empate (Paraipaba e Quixadá tem o mesmo número de votos)");
    } else if (quixeramobim != paraipaba && quixeramobim == quixada) {
      alert("empate (Quixadá e Quixeramobim tem o mesmo número de votos)");
    } else if (quixeramobim == paraipaba && quixeramobim != quixada) {
      alert("empate (Paraipaba e Quixeramobim tem o mesmo número de votos)");
    }
  }

  return (
    <View>
      <Text>Paraipaba: {paraipaba}</Text>
      <Button title="Paraipaba" onPress={aumentarParaipaba}></Button>

      <Text>Quixada: {quixada}</Text>
      <Button title="Quixada" onPress={aumentarQuixada}></Button>

      <Text>Quixeramobim: {quixeramobim}</Text>
      <Button title="Quixeramobim" onPress={aumentarQuixeramobim}></Button>

      <br></br>

      <Button title="resultado" onPress={vencedor}></Button>
    </View>
  );
}

export default Cidades;
