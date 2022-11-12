import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import { Button, Image, Switch, View } from 'react-native';
import 'react-native-gesture-handler';
import AppPicker from "./assets/components/AppPicker";
import AppTextInput from "./assets/components/AppTextInput";
import screen from "./assets/components/Screen";
import ListingEditScreen from "./assets/screens/ListingEditScreen";
import LoginScreen from "./assets/screens/LoginScreen";
import MessagesScreen from "./assets/screens/MessagesScreen";

export default function App() {

  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!granted)
      alert('You need to enable permission to access the library')
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled)
        setImageUri(result.uri)
    } catch (error) {
      console.log('error reading an image', error)
    }
  }

  useEffect( () => {
    requestPermission();
  }, [])

  return (
   <View style={screen.statusBar}>
    <Button title="Select Image" onPress={selectImage} />
    <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
   </View>
  );
}

