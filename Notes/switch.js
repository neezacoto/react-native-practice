import React, { useState } from "react";
import { Switch, View } from 'react-native';
import 'react-native-gesture-handler';

export default function App() {

  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false)
  return (
    <View style={screen.statusBar}>
      <Switch 
      value={isNew} 
      onValueChange={ newValue => setIsNew(newValue) }/>
    </View>
  );
}

