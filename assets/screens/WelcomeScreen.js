import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import LoginButton from '../components/Buttons/LoginButton';
import RegisterButton from '../components/Buttons/RegisterButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={10}
            style={styles.background}
            source={require('../background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../logo-red.png')} />
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold"}}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                
                <LoginButton style={{marginVertical: 26}}/>
                <RegisterButton color="secondary"/>
            </View>

        </ImageBackground>
    );  
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    buttonsContainer: {
        flex: 2,
        justifyContent:'flex-end',
        width: "90%",
        paddingBottom: "10%"
    }

})



export default WelcomeScreen;