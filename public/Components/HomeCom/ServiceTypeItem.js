import React from 'react';
import { TextInput } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

const ServiceTypeItem = ({source, serviceText}) => {
    return (
    <View style={{alignItems: 'center'}}>
        <View style={styles.container}>
            <Image source={source} style={{width: 60, height: 60}} resizeMode='contain'/>
        </View>
        <Text style={{fontSize: 11, color: '#585858', margin: 7}}>{serviceText}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.2,
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70, 
        height: 70
    }
})

export default ServiceTypeItem