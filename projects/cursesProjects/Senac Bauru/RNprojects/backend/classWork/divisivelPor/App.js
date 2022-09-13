import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <Text style={styles.textTitle}>Divisivel por:</Text>
      <View style={styles.viewHeader}>
        <TextInput style={styles.input} placeholder='Digite um Numero:' />
        <View style={styles.viewResultado}>
          <Text style={styles.textResultado}>1,</Text>
          <Text style={styles.textResultado}>1,</Text>
          <Text style={styles.textResultado}>1,</Text>
          <Text style={styles.textResultado}>1,</Text>
          <Text style={styles.textResultado}>1,</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
  },
  viewHeader:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewResultado:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
textTitle:{
  fontSize: 25,
  fontWeight: 'bold',
  marginLeft: 40,
  marginTop: 10,
  marginBottom: 10,

},
textResultado:{
  fontSize: 18,
  padding: 20
},
input:{
  width: 300,
  height: 50,
  padding: 15,
  borderWidth: 1,
}
});
