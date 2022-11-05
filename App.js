import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import 'react-native-gesture-handler';

import ViewingImageScreen from "./assets/screens/ViewingImageScreen"
import AppCard from "./assets/components/AppCard";
import AppButton from "./assets/components/AppButton";
import WelcomeScreen from "./assets/screens/WelcomeScreen";
import ListingDetailsScreen from "./assets/screens/ListingDetailsScreen";
import MessagesScreen from "./assets/screens/MessagesScreen";
import screen from "./assets/components/Screen";
import Icon from "./assets/components/Icon";
import ListItem from "./assets/components/ListItem";
import AccountScreen from "./assets/screens/AccountScreen";
import ListingsScreen from "./assets/screens/ListingsScreen";
export default function App() {

  const [firstName, setFirstName] = useState('');

  return (
    <View style={screen.statusBar}>
      <Text>{firstName}</Text>
      <TextInput
      onChangeText={text => setFirstName(text)} 
      style={{
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
      }}
      placeholder="First Name"/>
    </View>
  );
}

