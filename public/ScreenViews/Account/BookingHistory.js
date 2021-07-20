import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button,} from 'react-native'
import HeaderTitle from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ColorLib } from '../../Style/ColorLib';
import Booked from './BookingHis/Booked';
import Cancelled from './BookingHis/Cancelled';
const Tab = createMaterialTopTabNavigator();

const BookingHistory = ({navigation}) => {
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Booking history' onPress={()=> navigation.navigate('SignUp')}/>,
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
        <SafeAreaProvider>
            <Tab.Navigator style={{}}  
                    tabBarOptions={{
                        activeTintColor: ColorLib.headerColor2,
                        inactiveTintColor: '#000',
                        labelStyle: { fontSize: 13 },
                        headerTintColor: '#e91e63',
                        indicatorStyle: { backgroundColor: ColorLib.headerColor2},
                    }}>
                
                <Tab.Screen name="Booked" component={Booked} 
                   />
                <Tab.Screen name="Cancelled" component={Cancelled} />

            </Tab.Navigator>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({

})

export default BookingHistory