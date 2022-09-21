import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Text, } from "react-native";
import TextTitulo from "./TextTitulo";

export default function HeaderMmc(props){
    const [ number, setNumber ] = React.useState()
    const [ number2, setNumber2 ] = React.useState()
    const [ numberPrimo, setNumberPrimo] = React.useState([])

    React.useEffect(() => {
        let l = numberPrimo[parseInt()]
        for(let i=2; i < number, number2; i++){
            if (number, number2 % i != 0) { l.push(i)}
             setNumberPrimo(l)
        }
    },[setNumber, setNumber2])
    console.log(numberPrimo)
    return(
        <View style={styles.container}>
            <View>
                <TextTitulo titulo='MMC:'/>
            </View>
            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} placeholder="Digite um Numero" onChangeText={setNumber} value={number}/>
                <TextInput style={styles.textInput} placeholder="Digite um Numero" onChangeText={setNumber2} value={number2}/>
            </View>
                <TouchableOpacity onPress={() => props.onFator([number, number2, numberPrimo])} style={styles.button}><Text style={styles.textButton}>Mostrar</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
    },  
    containerTextInput:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    button:{
        width: '100%',
        height:40,
        backgroundColor: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput:{
        width: '50%',
        height: 40,
        margin: 5,
        borderWidth: 1,
    },
    textButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})