import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const AuthScreen = ({navigation}) => {
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: false
            }
        )
    },[navigation]
    )
    return (
        <SafeAreaView style={styles.container}>
            <Text>AuthScreen</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default AuthScreen