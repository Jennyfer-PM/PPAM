import { Text, StyleSheet, View, Button, Modal } from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen(){

    const [modalVisible, setModalVisible] = useState(false);

    return (
      <View style={styles.container}>
        <Button title='Mostrar modal' onPress={()=> setModalVisible(true)} color='purple'>
            Picame
        </Button>
        
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> setModalVisible(!modalVisible)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.textoModal} Soy un modal ></Text>
                    <Button title='Ocultar modal' onPress={()=> setModalVisible(false)} color='purple'></Button>
                </View>
            </View>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    textoModal: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
})