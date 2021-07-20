import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button, ScrollView} from 'react-native'
import GradientHeader from '../../Components/General/Header'
import Searchbar from '../../Components/HomeCom/Searchbar'
import HeaderTitle from '../../Components/General/HeaderTitle'
import Input from '../../Components/Input/TextInput'
import ButtonClick from '../../Components/Button/ButtonClick'
import { ColorLib } from '../../Style/ColorLib'
const ResetPassword = ({navigation}) => {

    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Reset Password' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
            }
        )
    },[navigation]
    )
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.box} >
                <Input style={{marginTop: 20}} placeholder="Enter your password"/>
                <Input style={{marginTop: 20}} placeholder="New password"/>
                <Input style={{marginTop: 20}} placeholder="Confirm new password"/>
                <ButtonClick text='Update' style={styles.login} textStyle={styles.textStyle}/>
            </ScrollView>
        </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
       
        marginTop: 40,
    },
    login:{
        backgroundColor: ColorLib.buttonColor1,
        width: 310,
        height: 40,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
       },
    textStyle:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    }
})

export default ResetPassword