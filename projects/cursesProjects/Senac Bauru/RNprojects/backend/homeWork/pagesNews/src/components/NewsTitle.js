import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NewsTitle(props){

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
               <Text style={styles.news}>{props.title}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    news:{
        fontSize: 18,
    }
})