import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const NextStepBtn = ({ navigate, lowerText = "Choose filter and load recipe", navigateTo }) => {
    return (
        <View style={styles.btnTextContainer}>
            <Text style={styles.lowerText}>{lowerText}</Text>
            <Pressable
                style={styles.nextStepBtn}
                onPress={() => navigate(navigateTo)} // Använder navigateTo för att navigera
            >
                <Text style={styles.btnIcon}>&rarr;</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    btnTextContainer: {
        width: 126,
        justifyContent: "center",
        alignItems: "center",
    },
    lowerText: {
        textAlign: "center",
        marginBottom: 16,
    },
    nextStepBtn: {
        alignItems: "center",
        backgroundColor: "lightgrey",
        paddingVertical: 4,
        width: "60%",
        borderRadius: 16,
    },
});

export default NextStepBtn;
