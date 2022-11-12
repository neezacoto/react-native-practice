import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

import screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    },
]

function AccountScreen({ navigation }) {
    return (
        <View style={[screen.statusBar,styles.screen]}>
            <View style={styles.container}>
                
                <ListItem 
                title="bruh"
                subTitle="ligma@gmail.com"
                image={require('../mosh.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={ menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                    <ListItem
                        title={item.title}
                        ImageComponent={
                            <Icon 
                            name={item.icon.name} 
                            backgroundColor={item.icon.backgroundColor}
                            />
                        }    
                        onPress={() => navigation.navigate(item.targetScreen)}
                    />
                    }
                />
            </View>
            <ListItem 
                title="Log Out"
                ImageComponent={
                    <Icon name="logout" 
                    backgroundColor="#ffe66d" 
                    />
                } 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;