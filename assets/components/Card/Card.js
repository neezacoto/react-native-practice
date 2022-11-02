import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

function Card(props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require('../../jacket.jpg')}/>

            </View>
            <View>
                <Text>Title</Text>
                <Text>sub title</Text>
            </View>
        </View>
    );
}

export default Card;