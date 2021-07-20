import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import GradientHeader from '../../Components/General/Header'
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderTitle from '../../Components/General/HeaderTitle';
import Input from '../../Components/Input/TextInput'
import PasswordInput from '../../Components/Input/PasswordInput'
import ButtonClick from '../../Components/Button/ButtonClick'
import {ColorLib} from '../../Style/ColorLib'
import { AuthContext} from '../../../Utils/Context/AuthContext'
import {Loading} from './Loading'
import {connect} from 'react-redux'
import { sleep } from '../../../Utils/sleep';

import index from '../../../Utils/Configs/index'
import { login } from '../../../Utils/Redux/userAuth/userAuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { resetError } from '../../../Utils/Redux/userAuth/userAuthAction';
const LoginScreen = ({navigation, user, dispatch, login, error, resetError}) => {

    // const {login} = useContext(AuthContext)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    // const [errorInfo, setError] = useState(null)

    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Login' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: {
                    position: 'absolute',
                },
                headerBackTitleVisible: false,
                // headerLeft: () => <View></View>,
                // headerRight: () =>  <Icon name='close' size={26} color='#000' style={{justifyContent: 'center', alignItems: 'center', marginRight: 5}}/>
            }
        )
    },[navigation])
    // useEffect(() => {
    //     setError(error)
    // })
    const OnLogin = async (email, password) => {
    
        await setLoading(true)
        await login(email, password)
        await sleep(1000)
        await setLoading(false)
       
    }

    const Register = async () => {
        await resetError()
        await navigation.navigate('SignUp')
        
    }

    const ForgotPassword = async () => {
        await resetError()

        await navigation.navigate('ForgotPassword')
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.box} showsVerticalScrollIndicator = {false} keyboardShouldPersistTaps='handled'>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>

              
                <Image source={require('../../src/image/Edana-Beauty.png')} style={{ width: 250, height: 220, resizeMode: 'stretch', marginTop: 70}}/>
                <Input style={{marginTop: 5}} placeholder="Enter your email" value={Email} onChangeText={setEmail}/>
                <PasswordInput placeholder="Enter your password" style={{marginTop: 20}} value={Password} onChangeText={setPassword}/>

                <ButtonClick text='Login' style={styles.login} textStyle={styles.textStyle} onPress={async () => { OnLogin(Email, Password)
                                    }}/>
              
                </View>
                <View  style={{justifyContent: 'center', marginHorizontal: 55}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <TouchableOpacity onPress={() => ForgotPassword()}>
                        <Text style={{color: ColorLib.blue1}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Register()}>
                        <Text style={{color: ColorLib.blue1}}>Register</Text>
                    </TouchableOpacity>
                </View>
                </View>
                
                {/* <View style={{marginTop: 20}}>
                    {error ? <Text style={{color: '#FE4E4E'}}>Email or password is not correct. Pleast try again</Text> : null}
                </View> */}
                {/* <View style={{marginTop: 20}}>
                    {user ? <Text style={{color: '#FE4E4E'}}>{user.username}</Text> : null}
                </View> */}
                <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                    {error ? <Text style={{color: '#FE4E4E'}}>Email or password is not correct. Pleast try again</Text> : null}
                </View>
            </ScrollView>
            <Loading loading={loading}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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
const ConnectedLogin = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.error
    }
}

const mapDispatchToState = dispatch => {
    return{
        login: (username, password) => dispatch(login(username, password)),
        resetError: () => dispatch(resetError())
    }
}
export default connect(ConnectedLogin, mapDispatchToState)(LoginScreen)