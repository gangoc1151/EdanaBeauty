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
    <View style={style.container}>
        <ServiceTypeItem source={require('../../src/image/Service/NailsService.png')} serviceText='Nail Services'/>
        <ServiceTypeItem source={require('../../src/image/Service/Beauty.png')} serviceText='Beauty Skincare'/>
        <ServiceTypeItem source={require('../../src/image/Service/massage.png')} serviceText='Massage'/>
    </View>)
}

const style= StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }
})

export default ServiceType