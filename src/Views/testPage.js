import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import GeneralButton from '../components/generalButton';
import Modal from '../components/modal';

const TestPage = () => {

  const modalRef = useRef(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal(); // Anropa openModal
    }
  };
  return (
    <View style={styles.container}>
     <GeneralButton
      title="open modal"
      onPress={handleOpenModal} 
      />
      <Modal ref={modalRef}>
        {/* Dynamiskt innehåll */}
        <View>
          <Text>Detta är en återanvändbar modal!</Text>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    padding: 32,
  },
  
});

export default TestPage;
