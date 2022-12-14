import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './Apptext';


function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}
            >

                <View style={styles.container}>
                {ImageComponent}
                {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText 
                        style={styles.title} 
                        numberOfLines={1} >{title}</AppText>
                        {subTitle && <AppText 
                                        style={styles.subTitle}
                                        numberOfLines={2}
                                    >{subTitle}</AppText>}
                    </View>
                    < MaterialCommunityIcons 
                    color={colors.medium}
                    name="chevron-left" size={25}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500"
    }
})

export default ListItem;