import React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [raio, setRaio] = React.useState()
  const [diametro, setDiametro] = React.useState()
  const [perimetro, setPerimetro] = React.useState()
  const [area, setArea] = React.useState()
  const calc = () => {
    let resDiametro = 2 * raio
    let resPerimetro = 2 * Math.PI * raio
    let resArea = Math.PI * (raio** 2)
    setDiametro(resDiametro)
    setPerimetro(resPerimetro)
    setArea(resArea)
  }
  useEffect(() =>{ 
    calc(setRaio)
  },[raio])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora de Circulos!</Text>
      </View>
      <View style={styles.vRaio}>
        <Text style={styles.txt}>Raio:</Text>
        <TextInput style={styles.input} placeholder='Digite o Raio' onChangeText={setRaio}/>
        <TouchableOpacity style={styles.button} onPress={() => calc()}><Text style={styles.txt} >Calcular</Text></TouchableOpacity>
      </View>
      <View style={styles.vResult}>
        <View style={styles.vVResult}>
          <Text style={styles.txtt}>Diâmetro:</Text>
          <Text style={styles.result}>{ diametro }</Text>
        </View>
        <View style={styles.vVResult}>
          <Text style={styles.txtt}>Perímetro:</Text>
          <Text style={styles.result}>{ perimetro }</Text>
        </View>
        <View style={styles.vVResult}>
          <Text style={styles.txtt}>Área:</Text>
          <Text style={styles.result}>{ area }</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 90,
    justifyContent: 'top',
    backgroundColor: '#CACACA',
    marginBottom: 60,

  },
  vRaio: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  vResult: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  vVResult: {
    flexDirection: 'row',
    width: '100%',
    height: 'flex',
  },
  title: {
    fontSize:35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt: {
    fontSize: 25,
  },
  txtt: {
    fontSize: 25,
    justifyContent: 'flex-start',
  },
  input:{
    width: 150,
    height: 60,
    borderWidth: 1,
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center'
  },
  result: {
    fontSize:35,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  }
});
