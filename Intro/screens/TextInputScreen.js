import { Text, StyleSheet, View, Button, Alert, TextInput, Platform} from 'react-native'
import React, { useState } from 'react'

export default function TextInputScreen(){
    const [nombre, setNombre] = useState('');

    const [texto, setTexto] = useState('');

    const [numer, setNumer] = useState('');

    const mostrarAlerta = () => {
        if ((nombre.trim()==='') || (texto.trim()==='') || (numer.trim()==='')) {
            if(Platform.OS === 'web') {
                window.alert ('ERROR, porfavor ingresa tu nombre, un texto y un número');
            } else {
                Alert.alert ('ERROR, porfavor ingresa tu nombre, un texto y un número')
            }
        }
        else {
            if (Platform.OS === 'web') {
                window.alert(`Hola ${nombre} tu texto es ${texto} y tu número fav es ${numer}`);
            } else {
                Alert.alert(`Hola ${nombre} tu texto es ${texto} y tu número fav es ${numer}`);
            }
        }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextScreen</Text>

        <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu nombre:'
        value = {nombre}
        onChangeText={setNombre}
        maxLength={50}
        />

        <TextInput
        style={styles.recuadro}
        placeholder='Escribe un texto:'
        multiline
        numberOfLines={4}
        maxLength={100}
        value={texto}
        onChangeText={setTexto}
        />

        <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu número fav:'
        value = {numer}
        onChangeText={setNumer}
        maxLength={50}
        inputMode='numeric'
        />

        <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33eaf7ff',
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    recuadro: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
    },
});