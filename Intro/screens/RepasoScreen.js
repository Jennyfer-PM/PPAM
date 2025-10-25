import { Text, StyleSheet, View, TextInput, Button, Alert, Platform, Switch, ImageBackground, Dimensions} from 'react-native'
import React, { useState, useEffect } from 'react'

const BackgroundImage = require("../assets/fondo.jpeg");
const LogoImage = require("../assets/logo.png");

const validar = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

export default function RepasoScreen({navigation}){

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const [aceptado, setAceptado] = useState(false);

    const mostrarAlerta = () => {
            if ((nombre.trim()==='') && (correo.trim) && (aceptado==false)) {
                if(Platform.OS === 'web') {
                    window.alert ('Error, porfavor ingresa los campos correspondientes');
                } else {
                    Alert.alert ('Error, porfavor ingresa los campos correspondientes')
                }
            }
            else if (nombre.trim()==='') {
                if(Platform.OS === 'web') {
                    window.alert ('Error, porfavor ingresa tu nombre completo');
                } else {
                    Alert.alert ('Error, porfavor ingresa tu nombre completo')
                }
            }
            else if(correo.trim()===''){
                if(Platform.OS === 'web') {
                    window.alert ('Error, porfavor ingresa tu correo electronico');
                } else {
                    Alert.alert ('Error, porfavor ingresa tu correo electronico')
                }
            }
            else if(!validar.test(correo.trim())){
                if(Platform.OS === 'web') {
                    window.alert ('Error, tu correo debe contener un @ y un dominio');
                } else {
                    Alert.alert ('Error, tu correo debe contener un @ y un dominio')
                }
            }
            else if(aceptado==false){
                if (Platform.OS === 'web') {
                    window.alert(`Porfavor, acepta los terminos y condiciones`);
                } else {
                    Alert.alert(`Porfavor, acepta los terminos y condiciones`);
                }
            } else {
                if (Platform.OS === 'web') {
                    window.alert(`Registro completado, Bienvenid@ ${nombre} con correo ${correo}`);
                } else {
                    Alert.alert(`Registro completado, Bienvenid@ ${nombre} con correo ${correo}`);
                }
            }
        }

    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    if(showSplash){
        return (
          <ImageBackground
            source={LogoImage}
            style={styles.background}
            resizeMode='center'>
              <View style={styles.overlay}>
                <Text style={styles.titulo1}>Registro</Text>
              </View>
          </ImageBackground>
        );
    }

    return (
        <ImageBackground
            source={BackgroundImage}
            style={styles.background}
            resizeMode='cover'>
        <View style={styles.container}>
        <Text style={styles.titulo}>REGISTRO</Text>

        <TextInput
            style={styles.recuadro}
            placeholder='Ingresa tu nombre:'
            value = {nombre}
            onChangeText={setNombre}
            maxLength={50}
        />

        <TextInput
            style={styles.recuadro}
            placeholder='Ingresa tu correo:'
            value = {correo}
            onChangeText={setCorreo}
            maxLength={100}
        />

        <View style={styles.swicthContainer}>
                  <Text style={[styles.switchLabel, {color: 'black'}]}>Acepto terminos y condiciones: </Text>
                  <Switch value = {aceptado} onValueChange={setAceptado}></Switch>
        </View>

        <View style={styles.boton}>
        <Button color='purple' title='Registrase' onPress={mostrarAlerta}/>
        </View>

      </View>     
      </ImageBackground>
    );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#50076dfa',
    },
    titulo1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffff',
    },
    swicthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchLabel: {
        fontSize: 16,
        marginRight: 10,
    },
    background: {
        width: width,
        height: height,
    },
    recuadro: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
    },
    boton:{
    marginTop:20,
    flexDirection:'row',
    gap:20,
  },
})