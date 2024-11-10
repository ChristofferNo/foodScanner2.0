import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Dimensions, Animated, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 

const { width } = Dimensions.get("window");

export default function AddIngredient({navigate}) {
    const [modalVisible, setModalVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(width)).current;  // Flyttad till useRef

    const openModal = () => {
        setModalVisible(true);  // Gör modalen synlig direkt

        // Starta animationen
        Animated.timing(slideAnim, {
            toValue: 0, // Flytta till 0 (synlig på skärmen)
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const closeModal = () => {
        Animated.timing(slideAnim, {
            toValue: width, // Flytta tillbaka utanför skärmen
            duration: 500,
            useNativeDriver: false,
        }).start(() => setModalVisible(false)); // Dölj modalen efter animationen
    };

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Text style={styles.upperText}>P</Text>
            </View>
            <View style={styles.middle}>
                <Text style={styles.middleHeader}>Items In Your Fridge</Text>
                <Pressable onPress={openModal} style={styles.btn}>
                    <Text>Add item</Text>
                </Pressable>
            </View>
            <View style={styles.lower}>
                <Text>P</Text>
            </View>

            {/* Modal-komponenten */}
            <Modal
                transparent
                visible={modalVisible}
                animationType="none"
                onRequestClose={closeModal}
            >
                <Animated.View style={[styles.modalContainer, { transform: [{ translateX: slideAnim }] }]}>
                    <View style={styles.closeCheckContainer}>
                        <Pressable onPress={closeModal}>
                            <Icon 
                            name="chevron-back-outline"
                            size={24}
                            />
                        </Pressable>
                        <Pressable onPress={closeModal}>
                            <Icon 
                            name="checkmark-outline"
                            size={24}
                            />
                        </Pressable>
                    </View>
                    
                    <TextInput
                        placeholder="Type ingredients"
                        style={styles.ingredientInput}
                    />
                </Animated.View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 32,
    },
    upper: {
        flex: 2,
        backgroundColor: '#fce47c',
    },
    middle: {
        flex: 3,
    },
    middleHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    lower: {
        flex: 2,
        backgroundColor: '#fce47c',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderStyle: "dashed",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 32,
        width: '40%',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 10,  // Lägger modalen framför andra komponenter
        width: '100%',
        height: '100%',
        paddingHorizontal: 32,
        paddingVertical: 64,
    },
    closeCheckContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    ingredientInput: {
        backgroundColor: 'lightgrey',
        padding: 16,
        borderRadius: 32,
    },
    modalText: {
        fontSize: 24,
        marginBottom: 20,
    },
    closeBtn: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeText: {
        color: 'white',
    },
});
