import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Modal as RNModal,
  Pressable,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get("window");

const Modal = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(width)).current;

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  const openModal = () => {
    setModalVisible(true);

    // Starta animationen
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setModalVisible(false));
  };

  return (
    <RNModal
      transparent
      visible={modalVisible}
      animationType="none"
      onRequestClose={closeModal}
    >
      <Animated.View
        style={[
          styles.modalContainer,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <ScrollView>
        <View style={styles.closeCheckContainer}>
          <Pressable onPress={closeModal}>
            <Icon name="chevron-back-outline" size={24} style={styles.closeBtn} />
          </Pressable>
        </View>
        {props.children}
        </ScrollView>
      </Animated.View>
    </RNModal>
  );
});

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    padding: 32,
  },
  closeCheckContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: 16,
  },
  closeBtn: {
    marginLeft: 12,
  },
});

export default Modal;
