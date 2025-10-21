import { Text, StyleSheet, View, Button, Alert, TextInput, Platform} from 'react-native'
import React, { useState } from 'react'

export default function TextInputScreen(){
    const [nombre, setNombre] = useState('');

    const [texto, setTexto] = useState('');

    const [numer, setNumer] = useState('');

    const [clave, setClave] = useState('');

    const mostrarAlerta = () => {
        if ((nombre.trim()==='') || (texto.trim()==='') || (numer.trim()==='') || (clave.trim()==='')) {
            if(Platform.OS === 'web') {
                window.alert ('ERROR, porfavor ingresa tu nombre, un texto, un número y una clave');
            } else {
                Alert.alert ('ERROR, porfavor ingresa tu nombre, un texto, un número y una clave')
            }
        }
        else {
            if (Platform.OS === 'web') {
                window.alert(`Hola ${nombre}. Tu texto es: ${texto}. Tu número fav es ${numer}. Y tu clave es: ${clave}`);
            } else {
                Alert.alert(`Hola ${nombre}. Tu texto es: ${texto}. Tu número fav es ${numer}. Y tu clave es: ${clave}`);
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

        <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu clave:'
        value = {clave}
        onChangeText={setClave}
        maxLength={50}
        secureTextEntry={true}
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