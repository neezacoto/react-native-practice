import React from 'react';
import { Button, TouchableOpacity, Text, View } from 'react-native';
import WideButton from '../WideButton/WideButton';

import colors from '../../config/colors';
function RegisterButton(props) {
    return (
        <View style={{...props.style}}>
           <WideButton title="REGISTER" style={{backgroundColor: colors.secondary}} />
        </View>
        );
    }

export default RegisterButton;