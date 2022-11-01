import React from "react";
import { ImageBackground, View} from 'react-native';
import VeiwingImageScreen from "./assets/screens/ViewingImageScreen";
import WelcomeScreen from "./assets/screens/WelcomeScreen";

export default function App() {
  
  return (
   <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius: 50,

      }}>

      </View>
   </View>

  );
}

