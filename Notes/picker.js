import React, { useState } from "react";
import { Switch, View } from 'react-native';
import 'react-native-gesture-handler';
import AppPicker from "./assets/components/AppPicker";
import AppTextInput from "./assets/components/AppTextInput";
import screen from "./assets/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {

  const [category, setCategory] = useState(categories[0]);
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false)
  return (
    <View style={screen.statusBar}>
      <AppPicker
       selectedItem={category}
       onSelectItem={item => setCategory(item)}
       items={categories} 
       icon="apps" 
       placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"/>
    </View>
  );
}

