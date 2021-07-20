import React from 'react'
import HeaderTitle from '../../Components/General/HeaderTitle';
import GradientHeader from '../../Components/General/Header'
import {ColorLib} from '../../Style/ColorLib'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import ButtonClick from '../../Components/Button/ButtonClick'
import Input from '../../Components/Input/TextInput'

const ForgotPassword = ({navigation}) => {

    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Login' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                // headerLeft: () => <View></View>,
                headerRight: () =>  <View></View>
                // headerRight: () =>  <Icon name='close' size={26} color='#000' style={{justifyContent: 'center', alignItems: 'center', marginRight: 5}}/>
            }
        )
    },[navigation])

    return (
    <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.box} showsVerticalScrollIndicator = {false} >
                        <Image source={require('../../src/image/Edana-Beauty.png')} style={{ width: 250, height: 220, resizeMode: 'stretch', marginTop: 20}}/>
                        <Input style={{marginTop: 20}} placeholder="Enter your email" />

                        <ButtonClick text='Reset Password' style={styles.signUp} textStyle={styles.textStyle} onPress={async () => { OnLogin(Email, Password)
                                        }}/>
                    </ScrollView>
        
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
        width: '100%',
        height: '100%',
        marginTop: 40,
        alignItems: 'center'
    },
    signUp:{
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

export default ForgotPassword