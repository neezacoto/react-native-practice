import { 
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View, 
    Alert,
    SafeAreaView, 
    Button,
    Platform,
    StatusBar,
  } from 'react-native';
  
  export default function App() {
    const handlePress = () => console.log("Text pressed")
  
    return (
      <SafeAreaView style={styles.container}>
        <Button 
        color="orange"
        title="Click me" 
        // onPress={()=> Alert.alert("My title","My message", [
        //   {text: "Yes", onPress: () => console.log("yes")},
        //   {text: "No", onPress: () => console.log("no")},
        // ])}/>
        onPress={()=> 
          Alert.prompt("My title", "My message", text => console.log(text))
          }/>
      <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "dodgerblue",
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });
  