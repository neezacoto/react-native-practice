import React from 'react';
import { Button, TouchableOpacity, Text, View } from 'react-native';
import WideButton from '../WideButton/WideButton';

import colors from '../../config/colors';
function LoginButton(props) {
    return (
        <View style={{...props.style}}>
            <WideButton title="LOGIN" style={[
            {backgroundColor: colors.primary},
        ]} />
        </View>
        
    );
}

export default LoginButton;