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

const ServiceTypeItem = ({source, serviceText, selectedStyle, onPress}) => {
    return (
    <TouchableOpacity style={{alignItems: 'center'}} activeOpacity={1} onPress={onPress}>
        <View style={[styles.container, selectedStyle]}>
            <Image source={source} style={{width: 60, height: 60}} resizeMode='contain'/>
        </View>
        <Text style={{fontSize: 13, color: '#585858', margin: 7}}>{serviceText}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.2,
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
     
    }
})

export default ServiceTypeItem