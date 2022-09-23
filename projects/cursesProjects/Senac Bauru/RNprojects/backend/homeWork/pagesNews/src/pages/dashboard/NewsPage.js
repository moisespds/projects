import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import NewsList from "../../components/NewsList";

export default function NewsPage(){

    const navigation = useNavigation()

    const [noticias, setNoticias] = React.useState([
        {
          imagem: require("../../../assets/android1.png"),
          titulo:"Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        },
        {
          imagem: require("../../../assets/android1.png"),
          titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
        }
      ]);

    return(
            <View style={styles.container}>
                <Header title="Noticias" />
                <NewsList noticias={noticias} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
})