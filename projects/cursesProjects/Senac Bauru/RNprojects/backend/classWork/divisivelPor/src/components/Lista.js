import React from "react";
import { SafeAreaView, View, StyleSheet, Text, } from "react-native";

export default function Lista(props){
    return(
        <View style={styles.containerLista}>
            {props.valores.map((d) => <Text style={styles.textLista}>{d}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    containerLista:{
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'space-between',
    },
    textLista:{
        width: 100,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        borderWidth: 1,
        margin: 10,
        flexWrap: 'wrap-reverse'
    }
})