import {useState} from 'react';
import { Text, StyleSheet, View} from 'react-native'
import {Button} from 'react-native';
import { ActivityIndicator } from 'react-native-web';

export default function ActivityScreen(){
  const [cargando, setCargando] = useState(false);
  const carga = ()=>{
    setCargando(true);
    setTimeout(()=>{
      setCargando(false);
      alert('¡Carga completa')
    }, 3000);
  };
    
    return (
      <View style= {styles.container}>
        <Text>Presione para iniciar la carga</Text>
        {cargando ? (<ActivityIndicator size='large' color='red'></ActivityIndicator>) : (<Button color='brown' title='Presione para iniciar' onPress={carga}></Button>)}
      </View>
    )  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#836969ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})