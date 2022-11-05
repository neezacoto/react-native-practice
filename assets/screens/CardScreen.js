import React from 'react';
import { StyleSheet, View } from 'react-native';

import PhoneContainer from '../components/PhoneContainer/PhoneContainer';
import Card from '../components/Card/Card';
function CardScreen(props) {
    return (
        <PhoneContainer style={{padding: 10}}>
            <View style={styles.viewContainer}>
            <Card 
            title="Red Jacket for sale!"
            subtext="$100"
            image={require('../jacket.jpg')}
            />

            </View>
        </PhoneContainer>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "#f8f4f4",
        padding: 30
    }
})

export default CardScreen;