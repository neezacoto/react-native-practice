import React from "react";
import { ImageBackground, View, Text } from 'react-native';

//supported fonts https://github.com/react-native-training/react-native-fonts
export default function App() {

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10
    }}>
      <Text style={{
        //fontFamily: "Courier",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        color: "tomato",
        textTransform: "capitalize",
        textAlign: "justify",
        lineHeight: 30
    
      }}> I love React Native!! This is my first React Native app! Here's some more text.
      </Text>
    </View>

  );
}

