import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ff9057'} barStyle='light-content' translucent={false} />
      <View style={styles.containerHeader}>
        <View style={styles.imageRedim}>
          <Image source={require('./assets/perfil.png')} style={styles.imageHeader}/>
        </View>
        <View style={styles.textRedim}>
          <Text style={styles.textTitulo}>Moises Prado da Silva</Text>
          <Text style={styles.textInter}>Buscando a primeira Vaga na area</Text>
          <Text style={styles.textInfo}>Aprendendo a programar com foco no backside na area de Ciências de dados, Machine learning e IA, em aplicaçõe mobile, WEB e Server side e inovações tecnologicas de nicho.</Text>
        </View>
      </View>
      <ScrollView>
      <View style={styles.containerInfo}>
          <Text style={styles.textTitulo}>Informações pessoais:</Text>
          <Text style={styles.textInfo}><Text style={styles.textSubTitulo}>Telefone:</Text> (14)9 9999-9999</Text>
          <Text style={styles.textInfo}><Text style={styles.textSubTitulo}>E-mail:</Text> moises.psilva5@senacsp.edu.com</Text>
          <Text style={styles.textInfo}><Text style={styles.textSubTitulo}>Github:</Text> www.github.com/moisespds/repositories</Text>
          <Text style={styles.textInfo}><Text style={styles.textSubTitulo}>LinkedIn:</Text> moises Prado</Text>
          <Text style={styles.textInfo}><Text style={styles.textSubTitulo}>Data de Nacimento:</Text> 26/09/1999</Text>
          <Text style={styles.textInfo}><Text style={styles.textSubTitulo}>Nacionalidade:</Text> Brasileiro</Text>
          <Text style={styles.textInfo}><Text style={styles.textSubTitulo}>Endereço:</Text> Rua: Getulio Vargas 1-71 jd. Contorno</Text>
      </View>
      <View style={styles.containerExperiencias}>
          <Text style={styles.textTitulo}>Experiências:</Text>
          <Text style={styles.textInfo}>  • Logica de programação trabalhando com variaveis, constantes, condicionais e loops com programação funcional em javascript</Text>
          <Text style={styles.textInfo}>  • Uso de HTML e CSS com criacões WEB, usando frameworks React e Vue para algumas aplicações WEB de minha autoria</Text>
          <Text style={styles.textInfo}>  • Experiência na criação de uma aplicação WEB completa como projeto na entrega final do meu curso, onde trabalhei com HTML CSS JavaScript utilizando o framework Vue para a criaçao de um blog de avaliações de cursos online. Utilizando Vue para a criação de componentes 
          da aplicação e estilização, e criando componentes focado no backend nodeJS para conexão com o banco de dados em uma aplicação onde eram nessessario trablhar com bancos relacionais(postgresSQL) e bancos nao relacionais(MongoDB) para a criação e edição de usuarios, posts e avaliações.
          </Text>
      </View>
      <View style={styles.containerFormacao}>
          <Text style={styles.textTitulo}>Formação:</Text>
          <Text style={styles.textInfo}>  • Curso Cod3r br na plataforma udemy: Logica de programação trabalhando com variaveis, constantes, condicionais e loops com programação funcional em javascript tambem usando python</Text>
          <Text style={styles.textInfo}>  • Curo de WEB moderno Cod3r br na plataforma udemy: Usando HTML, CSS e JavaScript com criacões WEB, experiências com frameworks React e Vue</Text>
          <Text style={styles.textInfo}>  • Cursando no Senac Bauru: uso de React Native para criação e estilisação de aplicações mobile</Text>
          <Text style={styles.textInfo}>  • Ensino medio completo </Text>
      </View>
      <View style={styles.containerRodape}>
        <View style={styles.containerIdiomas}>
          <Text style={styles.textRodape}>Idiomas:</Text>
          <Text style={styles.textInfo}>  • Inglês Basico(Aproximadamente Nivel B2)</Text>
        </View>
        <View style={styles.containerHabilidades}>
          <Text style={styles.textRodape}> Habilidades:</Text>
          <Text style={styles.textInfo}>  • Facilidades em resolver problemas</Text>
          <Text style={styles.textInfo}>  • Facilidades em resolver problemas</Text>
          <Text style={styles.textInfo}>  • Aprendo rapido</Text>
          <Text style={styles.textInfo}>  • Versátil</Text>
        </View>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    padding: 20,
  },
containerHeader:{
    flexDirection: 'row',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000',
  }, 
  containerInfo:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  containerExperiencias:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  containerFormacao:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  containerRodape:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerIdiomas:{
    width: '33.5%',
    borderWidth: 1,
    padding: 5,
  },
  containerHabilidades:{
    width: '60.5%',
    marginLeft: 15,
    borderWidth: 1,
    padding: 5,
  },
  imageRedim:{
    width: '23.5%',
  },
  textRedim:{
    width: '70.5%',
    marginLeft: 25,
  },
  imageHeader:{
    height: 120,
    width: 110,
    resizeMode: 'stretch',
    borderRadius: 50,
  },
  textTitulo:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0000ff',
    paddingBottom: 10,
  },
  textInter:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInfo: {
    fontWeight: 'bold',
  },
  textRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0000ff',
  },
  textSubTitulo:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0000ff'
  }
});
