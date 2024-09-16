import { Text, View, SafeAreaView, StyleSheet, Image, StatusBar, TouchableOpacity, Vibration, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#5F249F" />
      <View style={styles.header}>
        <View>
          <Image 
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          />
          <Text style={styles.fontColor}>Olá, Leonardo</Text>
        </View>
        <View style={styles.headerIcon}>
          <MaterialCommunityIcons name='eye-minus-outline' size={30} color="#CCC"/>
          <MaterialCommunityIcons name='progress-question' size={30} color="#CCC"/>
          <MaterialCommunityIcons name='email-plus-outline' size={30} color="#CCC"/>
        </View>

      </View>
      <View style={styles.contSald}>
        <View>
          <Text style={styles.fontTall}>Conta</Text>
          <Text style={styles.fontTall}>R$ 10.000,00</Text>
        </View>
        <View style={styles.iconBall}>
        <MaterialCommunityIcons name='dolby' style={styles.iconsPix}/>
        <MaterialCommunityIcons name='barcode' style={styles.iconsPix} />
        <MaterialCommunityIcons name='cash-plus' style={styles.iconsPix} />
        <MaterialCommunityIcons name='cash-refund' style={styles.iconsPix} />
        <MaterialCommunityIcons name='hand-coin-outline' style={styles.iconsPix}/>
        </View>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  header: {
    backgroundColor: '#5F249F',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 20
  },
  headerIcon: {
    flexDirection: 'row',
    margin: 20,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 25
  },
  fontColor: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 20,
    paddingBottom: 20
  },
  contSald: {
    margin: 20,
  },
  iconBall: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    alignItems: 'center',
    gap: 10
  },
  iconsPix: {
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#f0e7e7',
    backgroundColor: '#eeeeee',
    fontSize: 35,
    padding: 30,
    gap: 20
  },
  fontTall: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
