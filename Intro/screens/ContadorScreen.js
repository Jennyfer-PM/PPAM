
//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';


//2. Main: Zona de componentes
export default function ContadorScreen() {

    const [contador,setContador]= useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.botonesContainer}>
      <Button color='yellow' title='Agregar' onPress={()=>setContador(contador + 1)} /> 
      <Button color='pink' title='Quitar' onPress={()=>setContador(contador - 1)} /> 
      <Button color='blue' title='Reiniciar' onPress={()=>setContador(0)} /> 
      </View>

      <StatusBar style="auto" />

    </View>


  );
}

//3. Estilos: Zona estética para componentes.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d09be0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color:'rgba(31, 9, 82, 1)',
    fontSize:30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through'
  },
  texto2: {
    color:'rgba(107, 128, 128, 1)',
    fontSize:40,
    fontFamily: 'Courier',
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLine: 'underLine'
  },
  botonesContainer:{
    marginTop:20,
    flexDirection:'row',
    gap:20,
  },


});
