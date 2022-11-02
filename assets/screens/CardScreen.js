import React from 'react';
import { StyleSheet } from 'react-native';

import PhoneContainer from '../components/PhoneContainer/PhoneContainer';
import Card from '../components/Card/Card';
function CardScreen(props) {
    return (
        <PhoneContainer style={{padding: 10}}>
        <Card />
      </PhoneContainer>
    );
}

const styles = StyleSheet.create({
    
})

export default CardScreen;