import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import NewsImage from "./NewsImage"
import NewsTitle from "./NewsTitle";

export default function NewsItem(props){

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <NewsImage image={props.image}/>
                </View>
                    <NewsTitle title={props.title} />
            </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flexDirection: "row", 
    marginBottom: 10, 
    borderBottomWidth: 1, 
    borderColor: "#eee", 
    paddingBottom: 10
},
containerImage:{
    marginRight: 20,
},

})