import { Platform, StyleSheet } from 'react-native';

import colors from '../../config/colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: "100%",
        height: "auto",
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        alignItems: 'center',
        borderRadius: 20,

    },
    text: {
        color: "white",
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir" ,
        fontWeight: "bold",
    }
})

export default styles;