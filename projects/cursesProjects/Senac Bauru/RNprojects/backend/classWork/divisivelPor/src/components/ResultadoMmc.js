import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, ProgressViewIOSComponent, } from 'react-native';

export default function ResultadoMmc(props) {
  return (
    <View style={styles.containerResultado}>
        <Text style={styles.textResultado}>{props.resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    containerResultado:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    textResultado:{
        fontSize: 100,
        fontWeight: 'bold',
        paddingRight: 10,
        margin: 150,
    }
})
