import React, { useState } from "react";
import { Switch, View } from 'react-native';
import 'react-native-gesture-handler';
import AppPicker from "./assets/components/AppPicker";
import AppTextInput from "./assets/components/AppTextInput";
import screen from "./assets/components/Screen";
import ListingEditScreen from "./assets/screens/ListingEditScreen";
import LoginScreen from "./assets/screens/LoginScreen";
import MessagesScreen from "./assets/screens/MessagesScreen";

export default function App() {

  return (
   <ListingEditScreen />
  );
}

