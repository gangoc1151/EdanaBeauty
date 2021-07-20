import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button,} from 'react-native'
import GradientHeader from '../../Components/General/Header'
import Searchbar from '../../Components/HomeCom/Searchbar'
import HeaderTitle from '../../Components/General/HeaderTitle'
import Input from '../../Components/Input/TextInput'
import ButtonClick from '../../Components/Button/ButtonClick'
import { ColorLib } from '../../Style/ColorLib'
const Language = ({navigation}) => {
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
        <View>
            <Text>asdffd</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Language