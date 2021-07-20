import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../Components/General/HeaderTitle';
import GradientHeader from '../../Components/General/Header';
import ButtonClick from '../../Components/Button/ButtonClick';
import { ColorLib } from '../../Style/ColorLib';
const DoneBooking = ({navigation}) => {
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
        <View>
            <Text>Done</Text>
            <ButtonClick text='Done' style={styles.button} textStyle={styles.textStyle} onPress={() => navigation.navigate('HomeStack')}/>
        </View>
    )
}

const styles = StyleSheet.create (
    {   
        textStyle:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
      },
      button: {
        bottom:30,
        backgroundColor: ColorLib.buttonColor1,
        alignSelf: 'center',
        width: '75%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,

      }

    }
)

export default DoneBooking