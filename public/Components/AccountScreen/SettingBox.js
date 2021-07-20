import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

const SettingBox = ({children, title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line}></View>
            <View style={{marginHorizontal: 20, marginBottom: 15}}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop: 20,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 15
        
    },
    line:{
        height: 1,
        width: '100%',
        borderWidth: 1,
        borderColor:'#EEEEEE',
      
    },
    title:{
        color: '#414858',
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 16,
        paddingVertical: 10
        
    }

})

export default SettingBox