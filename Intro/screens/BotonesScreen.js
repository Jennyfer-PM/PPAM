import React, {use, useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch} from 'react-native';

export default function BotonesScreen() {
  const [prendido, setPrendido] = useState(false);

  const backgroundColor = prendido ? '#fab8e4ff' : '#121212';
  const textColor = prendido ? '#000' : '#fab8e4ff';
    return (
      <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.texto, {color: textColor}]}>Estado: {prendido ? 'Prendido' : 'Apagado'}</Text>
        <TouchableOpacity 
        style={styles.botonEncender}
        onPress={()=> setPrendido(true)}>
          <text style={styles.textoBoton}>Prender</text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.botonApagar}
        onPress={()=> setPrendido(false)}>
          <text style={styles.textoBoton}>Apagar</text>
        </TouchableOpacity>

        <View style={styles.swicthContainer}>
          <Text style={[styles.switchLabel, {color: textColor}]}>Control de Switch: </Text>
          <Switch value = {prendido} onValueChange={setPrendido}></Switch>
        </View>

      </View>

    ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  texto: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  botonEncender: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  botonApagar: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  swicthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
})