import Constants  from 'expo-constants';
import { StyleSheet } from 'react-native';

const screen = StyleSheet.create({
    statusBar: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})
export default screen;