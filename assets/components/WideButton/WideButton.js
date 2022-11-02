import React from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
function WideButton(props) {
    return (
        <TouchableOpacity 
        style={[
            styles.button,
            {...props.style}
        ]}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default WideButton;