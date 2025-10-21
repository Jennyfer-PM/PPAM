import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import ActivityScreen from './ActivityScreen';
import TextInputScreen from './TextInputScreen';
import ImgBackgSlapshScreen from './ImgBackgSlapshScreen';


export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch(screen){
    case 'contador': 
        return <ContadorScreen/>;
    case 'botones': 
        return <BotonesScreen/>;
    case 'activity':
        return <ActivityScreen/>
    case 'input':
        return <TextInputScreen/>
    case 'image':
        return <ImgBackgSlapshScreen/>
    case 'menu':
        default:
        return (
            <View style={styles.container}>
                <Text style={styles.menu}> Menu de Practicas </Text>
                <View style={styles.botoncitos}>
                <Button color='purple' onPress={()=>setScreen('contador')} title='Practica Contador'></Button>
                <Button color='purple' onPress={()=>setScreen('botones')} title='Practica Botones'></Button>
                <Button color='purple' onPress={()=>setScreen('input')} title='Practica Text Input'></Button>
                <Button color='purple' onPress={()=>setScreen('image')} title='Practica ImageBackgroung & SlapshScreen'></Button>
                <Button color='purple' onPress={()=>setScreen('activity')} title='Practica ACtivityIndicator'></Button>
                </View>
            </View>
    )
  }


}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#46ebc7ff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    menu: {
    color:'rgba(224, 31, 31, 1)',
    fontSize:40,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },

  botoncitos:{
    marginTop:20,
    flexDirection:'row',
    gap:20,
  },
})