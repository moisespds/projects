import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NewsItem(props){

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
               <Image style={styles.img} source={props.image} />
            </View>
    )
}

const styles = StyleSheet.create({
img:{
    width: 100,
    height: 100,
}
})