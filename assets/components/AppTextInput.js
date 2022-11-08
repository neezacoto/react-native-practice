import React from 'react';
import { Platform, TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
function AppTextInput({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container,{width}]}>
           {icon && <MaterialCommunityIcons 
                name={icon} 
                size={20}
                color={colors.medium}
                style={styles.icon}
            />}
            <TextInput
            placeholderTextColor={colors.medium}
            style={styles.textInput}
            {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        flex: 1
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput;