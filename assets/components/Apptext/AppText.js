import React from 'react';
import { Text,  style } from 'react-native';

import colors from '../../config/colors';
import styles from './styles'

function AppText({children, style, ...otherProps}) {
    return (
        <Text
        {...otherProps}
        style={[styles.text, style]}>{children}</Text>
    );
}



export default AppText;