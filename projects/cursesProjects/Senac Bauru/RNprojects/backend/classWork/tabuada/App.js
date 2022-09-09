import React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [ numero, setNumero ] = React.useState()
  const [ resultado, setResultado ] = React.useState()
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let tabuada = numbers.map((n) => {return n * numero
    })
    for(let i = 0; i < 10; i++) {
      setResultado(tabuada[i]);
    }
  useEffect(() => {
    tabuada
  },[numero])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Tabuada</Text>
      </View>
      <View style={styles.viewCalc}>
        <Text style={styles.txt}>Digite um Numero:</Text>
        <TextInput style={styles.input} placeholder='Digite um Numero' keyboardType='number-pad'
         onChangeText={setNumero}/>
        <Text style={styles.txt}>Resultado:</Text>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    width: '100%',
    height: 100,
    backgroundColor: '#CACACA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    padding: 10
  },
  viewCalc: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  txt:{
    fontSize: 25,
    marginBottom: 30,
  },
  input:{
    width: 200,
    height: 50,
    borderWidth: 1,
    padding: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
