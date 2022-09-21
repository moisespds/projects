import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function Resultado(props){
    return(
        <View style={styles.containerResultado}>
            <Text style={styles.textResultado}>Total:</Text>
            <Text style={styles.textResultado}>{props.total.length}</Text>
            <Text style={styles.textResultado}>Números</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerResultado:{
        flexDirection: "row",
        paddingRight: 5,
    },
    textResultado:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingRight: 10,
    }
})