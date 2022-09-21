import React from "react";
import { SafeAreaView, View, StyleSheet, Text, } from "react-native";

export default function TextTitulo(props){
    return(
        <Text style={styles.textTitulo}>{ props.titulo }</Text>
    )
}

const styles = StyleSheet.create({
textTitulo:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0000ff'
},
})