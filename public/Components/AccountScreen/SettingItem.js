import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {ColorLib} from '../../Style/ColorLib'

const SettingItem = ({text, icon, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={onPress}>
            <Icon name={icon} size={25} color= {ColorLib.headerColor2} />
            <Text style={{color: '#414858', marginStart: 10, fontSize: 15}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default SettingItem