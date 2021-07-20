import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal';

const ModalLogout = ({InVisible, onPressLogout, onPressCancel}) => {
    return (
        <Modal isVisible={InVisible}>
              <View style={{width: '100%', height: '100%'}}>
                <View style={styles.modal}>
                    <View style={{marginHorizontal: 10}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 10}}>Are you sure?</Text>
                        <Text style={{marginVertical: 10, fontSize: 16}}>Do you want to logout ?</Text>
                    </View>
               
                    <View style={{height: 1, width:'100%', borderColor: '#707070', borderWidth: 0.4}}/>
                    <View style={styles.decision}>
                        <TouchableOpacity style={{}} onPress={onPressLogout}>
                            <Text style={{color: '#DC355E', fontSize: 16}}>Logout</Text>
                        </TouchableOpacity>
                        <View style={{height: '100%', width:1, borderColor: '#707070', borderWidth: 0.4}}/>
                        <TouchableOpacity style={{}} onPress={onPressCancel}>
                            <Text style={{fontSize: 16}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
              </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: '#fff', width: '100%',
        alignSelf: 'center',
        marginTop: 300,
        borderRadius: 10
      },

    decision: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 40
    }
})

export default ModalLogout