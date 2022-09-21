import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, } from 'react-native';
import HeaderMmc from '../components/HeaderMmc';
import ResultadoMmc from '../components/ResultadoMmc';

export default function MmcPage() {
    const [ resultado, setResultado ] = React.useState()
    const [ nPrimos, setNPrimos ]  = React.useState([parseInt(2)])

    
    const confirmarPrimo = (num) => {
      for (let i = 2; i < num; i++)
      if (num % i === 0) { return false}
      return num > 1              
    }     
    
    console.log(confirmarPrimo(6))
    
    const fator = (number, numer2,) => {
      
    }
    React.useEffect(() => {
  
    }, [])

  return (
    <View>
        <HeaderMmc onFator={([number, number2, numberPrimo]) => fator([number, number2])}/>
        <ResultadoMmc resultado={() => numeroPrimo(7)} />
    </View>
  );
}

const styles = StyleSheet.create({

})
