import *  as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({style, placeholder, keyboardType, value, onChangeText}) => {
    return (
        <View style={style}>
            <TextInput placeholder={placeholder} 
                        style={styles.textInput}
                        autoCapitalize='none' 
                        autoCorrect={false}
                        keyboardType={keyboardType}
                        value={value}
                        onChangeText={onChangeText}
                        />
        </View>
    )
}

const styles = StyleSheet.create ({
    textInput: {
        paddingLeft: 20,
        width: 310,
        height: 40,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 25,
        paddingRight: 20
    }
})

export default Input