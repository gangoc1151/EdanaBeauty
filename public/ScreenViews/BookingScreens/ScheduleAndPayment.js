import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import GradientHeader from '../../Components/General/Header';
import Header from '../../Components/General/HeaderTitle';
import CalendarView from '../../Components/Booking/CalendarView';
import AgendaScreen from '../../Components/Booking/AdenaScreen';
import ScheduleTime from '../../Components/Booking/ScheduleTime';
import { SafeAreaView } from 'react-navigation';
import { data } from '../../../Utils/Data/data';
import NumberSeats from '../../Components/Booking/NumberSeats';
import PaymentOption from '../../Components/Booking/payments/PaymentOption';
import PaymentOptionItem from '../../Components/Booking/payments/PaymentOptionItem';
import ButtonClick from '../../Components/Button/ButtonClick'
import { ColorLib } from '../../Style/ColorLib';
const ScheduleAndPayment = ({navigation}) => {
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <View><Header text='Booking'/></View>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                // headerTransparent: {
                //     position: Platform.OS == 'ios' ? 'relative' : 'absolute',
                // },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
            }
        )
    },[navigation]
    )
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
        >
        
            <CalendarView />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{alignSelf: 'center'}}>
                    <ScheduleTime data={data.Service_Types.Nail_Service.Service}/>
            </ScrollView>

            <Text style={{alignSelf: 'center', marginTop: 20}}>Number of Seats</Text>
            <NumberSeats />
            <View style={styles.payment}>
                <PaymentOptionItem icon='payments' text='Credit Card' color='#035AA9'/>
              
                <PaymentOptionItem icon='money' text= 'Pay in store' color='#1FCFCD'/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, marginTop: 10,}}>Additional comments</Text>
                <View style={styles.comment}>
                    <TextInput placeholder='aasdds' multiline style={{width: 350, marginVertical: 7}}/>
                </View>
            </View>
            <View  style={{marginBottom: 400}}/>
        </ScrollView>
        
        <ButtonClick text='Done' style={styles.button} textStyle={styles.textStyle} onPress={() => navigation.navigate('DoneBooking')}/>

        </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1
    },
    payment: {
        borderWidth: 1,
        borderColor: '#DFDFDF',
        width: 380,
        alignSelf: 'center',
        marginTop: 20
    },
    comment:{
        borderWidth: 1,
        borderColor: '#DFDFDF',
        width: 380,
        height: 150,
       alignItems: 'center',
       marginTop: 10
    },
    textStyle:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
      },
      button: {
        position: 'absolute',
        bottom:30,
        backgroundColor: ColorLib.buttonColor1,
        alignSelf: 'center',
        width: '75%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,

      }
})

export default ScheduleAndPayment