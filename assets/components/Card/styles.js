import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        height: 300,
        width: "100%",
        backgroundColor: "white"
    },
    imageContainer: {
        flex: 2,
        
    },
    image :{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: undefined,
        width: undefined,
        flex: 1,
        
    },
    textContainer: {
        padding: 18
    },
    subText: {
        color: "aqua"
    },
    title: {
        marginBottom: 5,
        fontSize: 15
    }
})

export default styles;