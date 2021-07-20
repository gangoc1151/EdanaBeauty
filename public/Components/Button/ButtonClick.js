import *  as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const ButtonClick = (props) => {
    return (
        <View>
            <TouchableOpacity style={props.style} onPress={props.onPress} disabled={props.disabled}>
                <Text style={props.textStyle}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
        button: {  
            backgroundColor: '#FE4E4E',
            width: 160,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25
        },
       
})

export default ButtonClick