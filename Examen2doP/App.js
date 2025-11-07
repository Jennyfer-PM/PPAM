import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions, Alert} from 'react-native';
import { Button, SectionList } from 'react-native-web';

const imagen = require("../Examen2doP/assets/Restaurante.jpeg");

export default function App() {
  const mostrarAlerta = () => {
    window.alert('¿Deseas ordenar este platillo?')
  }

  const categorias = [
    {titulo: 'Entrada', data: ['Sopa - Sopa simple - 40$', 'Ensalada - Ensalada de lechuga - 70$']},
    {titulo: 'Platos principales', data: ['Pavo - Pieza de pavo recien hecha - 630$', 'Langosta - Langosta preparada al gusto - 500$']},
    {titulo: 'Bebidas', data: ['Agua - Agua natural con o sin hielo - 20$', 'Vino - Vino a elección del consumidor - 65$']},
    {titulo: 'Postres', data: ['Pastel - Pastel de diversos sabores - 50$', 'Pay - Pay de diversos sabores - 45$']}
  ]

  return (
    <ImageBackground
    source={imagen}
    resizeMode='cover'
    style={styles.background}>
    <View style={styles.container}>
      <ScrollView 
      style={styles.scrollArea}
      showsVerticalScrollIndicator={true}>
      <Text style={styles.title}> --BIENVENIDO AL MENÚ DEL RESTAURANTE-- </Text>
      <Text style={styles.subtitulo}> A continuación encontraras el menú digital del restaurante, podras ver los pedidos y realizar tu orden. </Text>

      <View style={styles.listContainer}>
        <Text style={styles.title}>MENÚ</Text>
        <SectionList
          sections={categorias}
          renderItem={({item})=>(
            <Text style={styles.item}>{item}</Text>
          )}

          renderSectionFooter={({})=>(
            <Button color='brown' title='Ordenar' onPress={mostrarAlerta}/>
          )}
          
          renderSectionHeader={({section})=>(
            <Text style={styles.titulo}>{section.titulo}</Text>
          )}
          />
      </View>
      </ScrollView>
      <StatusBar style="auto" />
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
    textAlign: 'center',
    margin: 10,
  },
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  background: {
    width: width,
    height: height,
  },
  scrollArea: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#be5656ff',
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
  },
  boton: {

  }
});
