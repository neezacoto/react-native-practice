import React from "react";
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import screen from "./assets/components/Screen";

const Link = () => {
  const navigation = useNavigation();

  return (
  <Button 
    title="Click"
    onPress={() => navigation.navigate("TweetDetails", { id: 1})}
  />

)
}
const Tweets = ({navigation}) => (
  <View style={screen.statusBar}>
    <Text>Tweets</Text>
    <Link />
  </View>
)

const TweetDetails = ({ route }) => (
  <View style={screen.statusBar}>
    <Text>Tweet Details {route.params.id} </Text>
  </View>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
        headerStyle: {backgroundColor: "dodgerblue"},
        headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails}/>
  </Stack.Navigator>
);

const Account = () => <View style={screen.statusBar}><Text>Account</Text></View>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
  >
    <Tab.Screen 
    name="Feed" 
    component={StackNavigator}
    options={{
      tabBarIcon: ({size, color}) => (
        <MaterialCommunityIcons 
          name="home" 
          size={size} 
          color={color}/>
      )
    }}
    />
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
}

