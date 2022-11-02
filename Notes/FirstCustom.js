import React from "react";
import { View } from 'react-native';

import AppText from "./assets/components/AppText";

//supported fonts https://github.com/react-native-training/react-native-fonts
export default function App() {

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10
    }}>
     <AppText>I love React Native</AppText>
    </View>

  );
}

