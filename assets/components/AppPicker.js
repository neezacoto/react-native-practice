import React, { useState } from 'react';
import { Platform, TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import AppText from './Apptext';
import screen from './Screen';
import PickerItem from './PickerItem';
function AppPicker({ icon,
      items,
      onSelectItem,
      selectedItem,
      placeholder,
      width="100%",
      PickerItemComponent = PickerItem,
      numberOfColumns
    
    }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress={ () => setModalVisible(true)}>
            <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons 
                    name={icon} 
                    size={20}
                    color={colors.medium}
                    style={styles.icon}
                />}
                {selectedItem ? ( <AppText style={styles.text}>{selectedItem.label}</AppText> 
                ) : (<AppText style={styles.placeholder}>{placeholder}</AppText>
                )}
                <MaterialCommunityIcons 
                    name="chevron-down" 
                    size={20}
                    color={colors.medium}
                />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <SafeAreaView>
            <Button  title="Close" onPress={() => setModalVisible(false)}/>
            <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({item}) => 
                <PickerItemComponent
                    item={item}
                    label={item.label}
                    onPress={() => {
                        setModalVisible(false) 
                        onSelectItem(item)
                    }}
                />
            }
                />
            </SafeAreaView>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    },
    text: {
        flex: 1,
    },
})

export default AppPicker;