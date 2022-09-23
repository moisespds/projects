import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header(props){

    const navigation = useNavigation()

    return(
            <View style={styles.header}>
                <Text style={styles.titulo}>{props.title}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        backgroundColor: '#CACACA',
        padding: 10,
        paddingLeft: 25,
},
titulo:{
    fontSize: 25,
    fontWeight: 'bold',
}
})