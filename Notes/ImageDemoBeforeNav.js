import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { Button, Image, Switch, View } from 'react-native';
import 'react-native-gesture-handler';
import AppPicker from "./assets/components/AppPicker";
import AppTextInput from "./assets/components/AppTextInput";
import screen from "./assets/components/Screen";
import ListingEditScreen from "./assets/screens/ListingEditScreen";
import LoginScreen from "./assets/screens/LoginScreen";
import MessagesScreen from "./assets/screens/MessagesScreen";
import ImageInput from "./assets/components/ImageInput";
import ImageInputList from "./assets/components/ImageInputList";

export default function App() {

  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemove = uri => [
    setImageUris(imageUris.filter(imageUris => imageUris !== uri))
  ]

  return (
    <ListingEditScreen />
  );
}

