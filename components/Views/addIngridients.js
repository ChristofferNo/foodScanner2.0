import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Dimensions, Animated, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

export default function AddIngredient({ navigate }) {
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

    const [text, setText] = useState('');
    const [modalIngredients, setIngredients] = useState([]);

    // Lyssnar på uppdateringar av modalIngredients
    useEffect(() => {
        if (modalIngredients.length > 0) {
            console.log('Updated Ingredients:', modalIngredients);
        }
    }, [modalIngredients]);

    const pushItem = () => {
        if (text.trim()) {
            setIngredients(prevIngredients => [...prevIngredients, text]);
            setText('');
        }
    };

    sliceItem = () => {
    }


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
                                style={styles.closeBtn}
                            />
                        </Pressable>
                        <Pressable onPress={closeModal}>
                            <Icon
                                name="checkmark-outline"
                                size={24}
                                style={styles.checkBtn}
                            />
                        </Pressable>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Type ingredients"
                            style={styles.ingredientInput}
                            value={text}
                            onChangeText={setText}
                        />
                        <Icon
                            name="add-outline"
                            size={24}
                            onPress={pushItem}
                        />
                    </View>

                    <View style={styles.modalIngredientContainer}>
                        <Text>Add Ingredients (0)</Text>
                        <View style={styles.modalIngredientContainer}>
                            {modalIngredients.map((ingredient, index) => (
                                <View style={styles.ingredientCard}> 
                                    <Text key={index} style={styles.ingredientText}>
                                        {ingredient}
                                    </Text>
                                    <Pressable onPress={sliceItem}>
                                        <Icon 
                                        name="close-outline"
                                        size={24}
                                        />
                                    </Pressable>
                                </View>
                            ))}
                        </View>
                    </View>

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

    //MODAL STYLING

    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 10,
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
    closeBtn: {
        marginLeft: 12,
    },
    checkBtn: {
        marginRight: 12,
    },

   
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: 16,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderStyle: "dashed",
        borderRadius: 8,
    },
    ingredientInput: {
        backgroundColor: 'none',
        borderRadius: 8,
        height: '100%'
    },

    modalIngredientContainer: {
        width: "100%",
        alignItems: 'center',
        paddingVertical: 16,
    },
    ingredientCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: "100%",
        padding: 16,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderStyle: "dashed",
        borderRadius: 8,
    }

});
