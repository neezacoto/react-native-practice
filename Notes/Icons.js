import React from "react";
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from "./assets/components/AppText";

//directory https://icons.expo.fyi/
export default function App() {

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10
    }}>
     <MaterialCommunityIcons name="email" size={200} color="dodgerblue"/>
    </View>

  );
}

