import { 
    StyleSheet,
    Dimensions,
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
  import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
  
  export default function App() {
    const handlePress = () => console.log("Text pressed")
    // console.log(Dimensions.get("screen"));
    const {landscape} = useDeviceOrientation()
    console.log(landscape)
    return (
      <SafeAreaView style={styles.container}>
        <View style={{
            backgroundColor: 'dodgerblue',
            width: '100%',
            height: landscape? "100%" : "30%",
        }}>
  
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
  });
  