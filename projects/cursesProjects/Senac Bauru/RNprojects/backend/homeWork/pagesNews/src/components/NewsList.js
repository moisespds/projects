import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import NewsItem from "./NewsItem";

export default function NewsList(props){

    const navigation = useNavigation()

    return(
        <ScrollView style={styles.container}>
            {props.noticias.map((n) => <NewsItem image={n.imagem} title={n.titulo}/>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
container:{
    padding: 10, 
    flex: 1
}
})