import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

function Card(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={props.image}/>

            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subText}>{props.subtext}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Card;