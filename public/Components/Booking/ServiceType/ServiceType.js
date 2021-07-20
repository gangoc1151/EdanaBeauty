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
  TouchableOpacity
} from 'react-native';
import ServiceTypeItem from './ServiceTypeItem'
const ServiceType = () => {
    
    return (
    <View style={styles.container}>
        <ServiceTypeItem source={require('../../../src/image/Service/NailsService.png')} serviceText='Nail Services' selectedStyle={styles.selectedStyle}/>
        <ServiceTypeItem source={require('../../../src/image/Service/Beauty.png')} serviceText='Beauty Skincare'/>
        <ServiceTypeItem source={require('../../../src/image/Service/massage.png')} serviceText='Massage'/>
    </View>)
}

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    selectedStyle: {
        borderColor: '#DC355E',
        borderWidth: 1
    }
})

export default ServiceType