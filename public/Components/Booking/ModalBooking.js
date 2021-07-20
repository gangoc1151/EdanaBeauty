import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal';
import SpecificList from './SpecificList';
import ButtonClick from '../Button/ButtonClick';
import { ColorLib } from '../../Style/ColorLib';
const ModalBooking = ({InVisible, onPressLogout, onPressCancel}) => {
    return (
        <Modal isVisible={InVisible}>
              <View style={{width: '100%', height: '100%'}}>
                <View style={styles.modal}>
                    <View style={{marginHorizontal: 10, marginVertical:10}}>
                            <SpecificList />
                            <SpecificList />
                            <SpecificList />
                            <SpecificList />
                            <SpecificList />
                            <SpecificList />
                    </View>
                    <ButtonClick    text='Done' 
                                style={styles.login} 
                                textStyle={styles.textStyle} 
                    />
                </View>
               
              </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: '#fff', 
        width: '100%',
        alignSelf: 'center',
        marginTop: 300,
        borderRadius: 10
    },
    decision: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 40
    },
    login:{
        backgroundColor: ColorLib.buttonColor1,
        width: 130,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 10
       },
    textStyle:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    },
})

export default ModalBooking