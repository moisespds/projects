import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, } from 'react-native';
import DivisivelPage from './src/pages/divisivelPage';
import MmcPage from './src/pages/MmcPage';

export default function App() {
  return (
    <View>
      <DivisivelPage/>
      <MmcPage />
    </View>
  );
}

const styles = StyleSheet.create({

})
