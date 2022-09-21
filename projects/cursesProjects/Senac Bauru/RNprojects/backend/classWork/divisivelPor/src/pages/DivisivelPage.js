import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";

import Header from "../components/Header";
import Lista from "../components/Lista";
import Resultado from "../components/Resultado";

export default function DivisivelPage(){
    const [ lista, setLista ] = React.useState([])
    const listar = (number) => {
        let l = [] 
        for(let i = 1; i <= number; i++){
            if (number % i == 0)  
              l.push(i)
        }
        // l.forEach((number, i, arr) => {
        //     i = 1 && i <= number == i++
        //     if(number % i == 0)
        //     arr.push(i)
        // })
        setLista(l)
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto'/>
            <Header onListar={(number) => listar(number)} />
            <View style={styles.containerLista}>
                <Lista valores={lista} />
            </View>
            <Resultado total={lista}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
        padding:5,
    },
    containerLista:{
        flex: 1,
    }
})