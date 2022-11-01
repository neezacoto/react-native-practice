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
        //apple
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
        //android
        elevation: 50,

      }}>

      </View>
   </View>

  );
}

