import React from 'react'

import {View, StyleSheet, ActivityIndicator, Text} from 'react-native'

export function Loading({loading}) {
    if (!loading) {
        return <View />
    }

    return <View style={styles.containter}>
                <View style={styles.box}>
                    <ActivityIndicator color="#FE4E4E" size="small"/>
                    <Text style={{marginLeft: 16, fontSize: 15, fontWeight: '400'}}>Loading....</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    containter:{
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 9,
    }
})