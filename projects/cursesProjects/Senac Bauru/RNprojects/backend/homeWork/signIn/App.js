import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.caixaI}>
      <Image style={styles.img} source={require ("./assets/android1.png")}/>
      </View>
      <View style={styles.caixa}>
          <TextInput style={styles.input} placeholder={'E-mail'}/>
          <TextInput style={styles.input} placeholder={'Senha'}/>
          <TouchableOpacity style={styles.buttonE}><Text>Entrar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonN}><Text>Novo usuário</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonEsc}><Text>Esqueci minha senha</Text></TouchableOpacity>
      </View>
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
  buttonE:{
    width: 300,
    height: 40,
    backgroundColor: '#80CC0E',
    marginBottom: 25,
    textAlign: 'center',
    justifyContent: 'center'
  },
  buttonN:{
    width: 300,
    height: 30,
    backgroundColor: '#80CC0E',
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center'
  },
  buttonEsc:{
    width: 300,
    height: 30,
    backgroundColor: '#CACACA',
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
  }
});
