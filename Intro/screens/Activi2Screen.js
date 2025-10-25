import { StyleSheet, View, Text} from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Activi2Screen({navigation}){
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if(showSplash){
    return (
          <View>
            <Text>Bienvenido</Text>
            <Text>Cargando...</Text>
          </View>
    );
  }

  const [cargando, setCargando] = useState(false);
  const carga = ()=>{
    setCargando(true);
    setTimeout(()=>{
      setCargando(false);
      alert('¡Carga completa')
    }, 3000);
  };

  return(
    <View style= {styles.container}>
        <Text>Presione para iniciar la carga</Text>
        {cargando ? (<ActivityIndicator size='large' color='red'></ActivityIndicator>) : (<Button color='brown' title='Presione para iniciar' onPress={carga}></Button>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#836969ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
