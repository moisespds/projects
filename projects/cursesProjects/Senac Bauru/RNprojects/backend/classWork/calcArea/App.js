import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  const [base, setBase] = React.useState(0)
  const [alt, setAlt] = React.useState(0)
  const [resultado, setResult] = React.useState(0)
  const calc = () => {
    const res = base * alt
    setResult(res)
   }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={[styles.title, styles.A]}>Area do Retangulo</Text>
      </View>
      <View style={styles.base}>
        <Text style={styles.txt}>Base:</Text>  
        <TextInput style={styles.input} onChangeText={setBase} value={base}/>
      </View>
      <View style={styles.alt}>
        <Text style={styles.txt}>Altura:</Text>
        <TextInput style={styles.input} onChangeText={setAlt} value={alt}/>
      </View>
      <View style={styles.bt}>
        <Button style={styles.button} title='Calcular' onPress={() =>{ calc()}}/>
      </View>
      <View style={styles.rst}>
          <Text style={styles.title}>Resultado:</Text>
          <Text style={styles.res}>{resultado}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B1E8F',
  },
  header:{
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    height: 150,
    backgroundColor: ''
  },
  base: {
    display: 'flex',
    alignContent: 'start',
    marginBottom: 50,
    height: 100,
    backgroundColor: ''
  },
  alt: {
    display: 'flex',
    alignContent: 'center',
    marginBottom: 60,
    height: 100,
    backgroundColor: ''
  },
  bt: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginLeft: 50,
    height: 50,
    width: 300,
    height: 50,
    color: '#8B0CF7',
    backgroundColor: '#3C208F',
    borderRadius: 20,
    fontSize: 50,
  },
  rst: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    height: 100,
    backgroundColor: ''
  },
  input: {
    height: 50,
    width: 400,
    border: 2,
    borderColor: '#8B0CF7',
    borderRadius: 20,
    backgroundColor: '#C30CED',
    marginLeft: 10,
  },
  button: {
    flex: 1,
    width: 300,
    height: 50,
    color: '#8B0CF7',
    backgroundColor: '#C30CED',
    borderRadius: 20,
    fontSize: 50,
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    alignContent: 'left',
    paddingBottom: 15,
    marginLeft: 35,
    color: '#fff',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  res: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  A: {
    paddingTop: 100,
  }
});
