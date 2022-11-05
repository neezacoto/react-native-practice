import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import styles from './styles';

function DetailsPage(props) {
    return (
        <View style={{flex: 1, justifyContent: "flexend", marginTop: 20}}>
            <View>
                <View style={styles.imageContainer}>
                    <Image 
                    style={styles.image}
                    source={props.image}/>

                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subText}>{props.subtext}etaoe</Text>
                </View>
            </View>
        </View>
    );
}

export default DetailsPage;