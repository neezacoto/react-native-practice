import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles'
function PhoneContainer(props) {
    return (
        <SafeAreaView style={styles.container}>
        { props.children }
        </SafeAreaView>
    );
}

export default PhoneContainer;