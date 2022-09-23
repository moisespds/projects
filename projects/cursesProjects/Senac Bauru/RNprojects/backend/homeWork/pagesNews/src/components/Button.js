import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inputs(props){

    const navigation = useNavigation()

    return(
            <View>
               <TouchableOpacity style={styles.news} onPress={() => props.onlogIn()}><Text>LogIn</Text></TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    news:{
        width: 300,
        height: 40,
        borderWidth: 1,
    }
})