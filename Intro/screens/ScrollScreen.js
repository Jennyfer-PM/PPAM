import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function ScrollScreen() {
    return (
      <View style = {styles.container}>
        <ScrollView style={styles.scrollArea} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}>
          <Text style={styles.title}>Duskwood</Text>
          <Text style={styles.item}>Más información aqui, desplazate para leer todo</Text>
          <Text style={styles.subtitleRed}>¿Qué es?</Text>
          <Text style={styles.text}>
            Duskwood es un juego de detectives interactivo para móvil, 
            disponible en Android e iOS, donde resuelves un caso de secuestro investigando a través de mensajes de texto, 
            fotos, audios y videollamadas. El jugador debe tomar decisiones que afectan la historia, 
            desentrañar secretos y encontrar a una chica desaparecida llamada Hannah, 
            interactuando con un grupo de amigos a través de una interfaz de chat. 
          </Text>
          <Text style={styles.subtitleRed}>Trama de suspenso cautivadora: </Text>
          <Text style={styles.text}>
            El secuestro de Hannah, la desaparición del hacker Jake y los oscuros secretos del pueblo de Duskwood 
            crean un ambiente de misterio constante. El suspense aumenta a medida que descubres nuevos detalles 
            y te das cuenta de que todos tienen algo que esconder.
            </Text>
          <Text style={styles.subtitleRed}>Giro argumental impactante: </Text>
          <Text style={styles.text}>
             El juego es conocido por su revelación final, que sorprende a muchos jugadores y deja una impresión duradera. 
             La complejidad del misterio hace que la comunidad de fans teorice constantemente sobre los motivos 
             y la identidad del culpable.
          </Text>
          <Text style={styles.subtitleRed}>Elemento de terror psicológico: </Text>
          <Text style={styles.text}>
            Aunque no es un juego de terror tradicional, Duskwood utiliza el suspense, la paranoia 
            y una atmósfera inquietante para mantener al jugador en tensión. La sensación de ser observado 
            por una presencia desconocida es un elemento central que contribuye a la experiencia. 
          </Text>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17bceeff'
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#580a68ff',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#0a30acff',
    color: '#ffffff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  subtitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0a0c83ff',
    textAlign: 'center',
    backgroundColor: '#727275ff',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#0a0a0aff',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
  },
  textRed: {
    fontSize: 16,
    color: '#fa51a6ff',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#023788ff',
    borderRadius: 10,
  },
})