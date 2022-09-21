import React from "react";
import { useState } from "react";
import { SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Text, } from "react-native";
import TextTitulo from "./TextTitulo";

export default function Header(props){
    const [ number, setNumber ] = React.useState()
    return(
        <View>
            <View>
                <TextTitulo titulo='Divisivel Por:'/>
            </View>
            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} placeholder="Digite um Numero" onChangeText={setNumber} value={number}/>
                <TouchableOpacity onPress={() => props.onListar(number)} style={styles.button}><Text style={styles.textButton}>Mostrar</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTextInput:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    button:{
        width: 80,
        height:40,
        backgroundColor: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput:{
        width: 300,
        height: 40,
        borderWidth: 1,
    },
    textButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})