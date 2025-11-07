import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions} from 'react-native';
import { SectionList } from 'react-native-web';

const imagen = require("../Examen2doP/assets/Restaurante.jpeg");

export default function App() {
  const categorias = [
    {titulo: 'Entrada', data: ['Sopa', 'Ensalada', 'Tostadas']},
    {titulo: 'Platos principales', data: ['Pavo', 'Cordero', 'Cangrejo']},
    {titulo: 'Bebidas', data: ['Agua', 'Vino', 'Whisky']},
    {titulo: 'Postres', data: ['Pastel', 'Pay', 'Gelatina']}
  ]

  return (
    <ImageBackground
    source={imagen}
    resizeMode='cover'>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
      <Text> --BIENVENIDO AL MENÚ DEL RESTAURANTE-- </Text>
      <Text> A continuación encontraras el menú digital del restaurante, podras ver los pedidos y realizar tu orden. </Text>

      <View>
        <Text>MENÚ</Text>
        <SectionList
          sections={categorias}
          renderItem={({item})=>(
            <Text>{item}</Text>
          )}
          
          renderSectionHeader={({section})=>(
            <Text style={styles.titulo}>{section.titulo}</Text>
          )}/>
      </View>
      </ScrollView>
    </View>
    </ImageBackground>
  );
}

const{width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  background: {
    width: width,
    height
  }
});
