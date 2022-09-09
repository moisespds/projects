import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.caixaI}>
      <Image style={styles.img} source={require ("./assets/android1.png")}/>
      <Text style={styles.txt}>Novo Usuário</Text>
      </View>
      <View style={styles.caixa}>
          <TextInput style={styles.input} placeholder={'Nome'}/>
          <TextInput style={styles.input} placeholder={'E-mail'}/>
          <TextInput style={styles.input} placeholder={'Senha'}/>
          <TextInput style={styles.input} placeholder={'Confirme a Senha'}/>
          <TouchableOpacity style={styles.button}><Text>Registrar</Text></TouchableOpacity>
      </View>
      <StatusBar barStyle={'auto'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#CACACA',
    marginBottom: 20,
    paddingLeft: 15,
  },
  button:{
    width: 300,
    height: 40,
    backgroundColor: '#80CC0E',
    marginBottom: 30,
    textAlign: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 200,
    height: 120,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  caixa: {
    flex: 2,
    justifyContent: 'top',
    alignItems: 'center',
  },
  caixaI: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    
  }
});
