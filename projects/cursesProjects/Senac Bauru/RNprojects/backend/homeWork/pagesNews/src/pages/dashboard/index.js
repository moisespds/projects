import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard(){

    const navigation = useNavigation()

    return(
        <SafeAreaView>
            <StatusBar backgroundColor={'#00ff00'} barStyle='light-content' translucent={false} />
            <View>
                <Text>Testado!!!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}><Text>Mudar</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NewsPage')}><Text>Mudar</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})