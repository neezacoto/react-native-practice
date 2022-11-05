import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Refresh, RefreshControl} from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants'

import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../mosh.jpg')
    },
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
            <FlatList 
                style={[screen.statusBar,{flex: 1}]}
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={()=>console.log("message selected", item)}
                    renderRightActions={() => 
                    <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />}
                
                ItemSeparatorComponent={ListItemSeparator}
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                        onRefresh={()=> {
                            setMessages([
                                {
                                    id: 2,
                                    title: 'T2',
                                    description: 'D2',
                                    image: require('../mosh.jpg'),
                                },
                            ])
                        }}
                    />}
            />
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;