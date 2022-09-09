import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notícias</Text>
      </View>
      <View style={styles.cont}>
        <View style={styles.news}>
          <Image style={styles.img} source={require("./assets/android1.png")}/> 
          <Text style={styles.txt}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
        <View style={styles.news}>
          <Image style={styles.img} source={require("./assets/android1.png")}/>
          <Text style={styles.txt}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
        <View style={styles.news}>
          <Image style={styles.img} source={require("./assets/android1.png")}/> 
          <Text style={styles.txt}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
        <View style={styles.news}>
          <Image style={styles.img} source={require("./assets/android1.png")}/> 
          <Text style={styles.txt}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    width: '100%',
    height: 70,
    backgroundColor: '#CACACA',
    textAlign: 'flex-start',
    alignContent: 'center',
    marginBottom: 80,
    padding: 10,
  },
  img: {
    width: 120,
    height: 80,
    paddingRight: 20,
    resizeMode: 'stretch'
},
  txt:{
    fontSize: 20,
  },
  title: {
    fontSize: 35,
  }, 
  news: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 25,
    justifyContent: 'space-between',
  },
  cont: {
    padding: 15,
  }
});
