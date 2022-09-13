import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, CheckBox, Button } from 'react-native';

function Tarefa({tarefa}){
  const [isSelected, setSelection] = useState(tarefa.selecionado)

  const deletar = () => {
    listaTarefas.slice(tarefa.selecionado)
}
  
  return(
    <View style={styles.checkboxContainer}>
    <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox}/>
   <Text style={styles.txt}>{tarefa.nome}</Text>
   <Button style={styles.buttonX} title={'X'} color={'red'} onPress={()=> deletar}/>
     </View>
  )
}

/*function Deletar({tarefa}){
  const [isSelected, setSelection] = useState(tarefa.selecionado)

  const delet = () => {
    listaTarefas.filter((item)=>{
    return item !== tarefa.selecionado
    })
}
return(
  <TouchableOpacity style={styles.button} onPress={() => delet()}><Text style={styles.txt}>Deletar</Text></TouchableOpacity>
)
}*/

export default function App() {

  const [tarefa, setTarefa] = React.useState()
  const [listaTarefas, setListaTarefas] = React.useState([])
  let tarefas = {nome: tarefa, selecionado: false}
  
  const adicionar =() => {
    listaTarefas.push(tarefas.nome)
    setTarefa('')
  } 

  const deletar = () => {
    listaTarefas.slice(tarefas.selecionado)
    setListaTarefas('')
}
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Tarefas!</Text>
      </View>
      <View><Text style={styles.txtSubTitulo}>Adicionar Tarefa:</Text></View>
      <View style={styles.viewCaixa}>
        <TextInput style={styles.input} placeholder='Oque vai fazer hoje?' onChangeText={setTarefa} value={tarefa}/>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={() => adicionar()}><Text style={styles.txt}>Adicionar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => deletar()}><Text style={styles.txt}>Deletar</Text></TouchableOpacity>
        </View> 
      </View>
      <View style={styles.tarefasContainer}>
        {listaTarefas.map((tarefa) => <Tarefa tarefa={tarefa}/>)}
        {listaTarefas.filter((tarefa) => <Tarefa tarefa={tarefa} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    width: '100%',
    height: 100,
    backgroundColor: '#CACACA',
    padding: 10,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tarefasContainer:{
  },
  viewCaixa:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton:{
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  checkbox: {
    alignSelf: "center",
  },
  input:{
    width: 350,
    height:50,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  button:{
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  txt: {
    flex: 2,
    fontSize: 25,
    paddingLeft: 20
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  buttonX:{
    flex: 2,
    justifyContent: 'flex-end'
  },
  txtSubTitulo: {
    flex: 2,
    fontSize: 25,
    paddingLeft: 20
  },
});
