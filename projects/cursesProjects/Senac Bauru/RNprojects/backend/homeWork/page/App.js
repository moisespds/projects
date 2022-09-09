import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const back = " < "
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}> {back} </Text>
      </View>
      <View style={styles.corpo}>
        <Text style={styles.title}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        <Image style={styles.img} source={require ("./assets/android1.png")} />
        <Text style={styles.txt}>O Apple Pay ainda não está totalmente consolidado no mercado: só funciona nos Estados Unidos e em estabelecimentos parceiros com equipamento de leitura NFC. E, de acordo com um relato do China Business Week, ele logo deve ganhar um concorrente de peso para piorar a situação. Isso porque a Google estaria preparando um sistema de pagamentos via celular muito parecido que, ao menos provisoriamente, levaria o nome de Android Pay.</Text>  
        <Text style={styles.txt}>O Android Pay estaria em desenvolvimento na China, em uma parceria com a China UnionPay, maior operadora de cartões de crédito e débito do país — segunda do mundo, atrás somente da Visa. Essa aliança traz o benefício de um maior número de estabelecimentos envolvidos, dando uma vantagem inicial ao serviço em relação aos concorrentes.</Text>  
        <Text style={styles.txt}>Ainda segundo o site, o sistema seria o mesmo: bastaria aproximar o smartphone do terminal de pagamento para processar a compra, com base na tecnologia sem fio Near</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#CACACA',
    width: '100%',
    height: 70,
    marginBottom: 10,
    justifyContent: 'top',
    alignItems: 'flex-start'
  },
  img:{
    width: 300,
    height: 140,
    resizeMode: 'stretch'
  },
  txt: {
    fontSize: 16,
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
  },
  back: {
    fontSize: 50,
  },
  corpo:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
