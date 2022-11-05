import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import screen from '../components/Screen';
import Card from '../components/Card/Card'
import colors from '../config/colors';
const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../jacket.jpg')
    },
    {
        id: 2,
        title: 'couch in great condition',
        price: 1000,
        image: require('../couch.jpg')
    }
]

function ListingsScreen(props) {
    return (
        <View style={[screen.statusBar,styles.screen]}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item})=> 
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price} 
                        image={item.image}
                        />
            
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;