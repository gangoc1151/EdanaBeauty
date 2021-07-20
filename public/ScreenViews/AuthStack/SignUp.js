import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import HeaderTitle from '../../Components/General/HeaderTitle';
import GradientHeader from '../../Components/General/Header'
import Input from '../../Components/Input/TextInput'
import ButtonClick from '../../Components/Button/ButtonClick'
import {ColorLib} from '../../Style/ColorLib'
import { AuthContext } from '../../../Utils/Context/AuthContext';
import { Loading } from './Loading';
import { GetUser } from '../../../Utils/Hooks/api';
import { createAction } from '../../../Utils/Context/createAction';
import {connect} from 'react-redux'
import { keepUsername } from '../../../Utils/Redux/userAuth/userAuthAction';
const SignUp = ({navigation,keepUsername, user}) => {
    // const {register} = useContext(AuthContext)
    const [Email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    // const  {state} = useContext(AuthContext)

    // const register = {
    //     email: email,
    //     password: "",
    //     username: "",
    //     phone: "",
    // }
    // console.log(userRegister)

    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Register' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: {
                    position: 'absolute',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                // headerLeft: () => <View></View>,
                headerRight: () =>  <View></View>
            }
        )
    },[navigation]
    )
    const OnClick = async (email) => {
        await setLoading(true) 
        await setError('')
        
         const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === true){
                // await register(email)
                await GetUser(email).then((res) => {
                const nameexist = JSON.parse(JSON.stringify(res.data))
                // console.log(nameexist)
                if (nameexist && nameexist.length > 0) {
                    setError('This email has been registered already')
               
                }else{
                    // console.log(state.userRegister)
                    keepUsername(email)
                    // console.log(user)
                    navigation.navigate('PersonInfor', {email: email})
                }
        })
        }
        else{
            setError('Please provide your email address')
        }
        await setLoading(false) 

    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.box} showsVerticalScrollIndicator = {false} >
            <Image source={require('../../src/image/Edana-Beauty.png')} style={{ width: 250, height: 220, resizeMode: 'stretch', marginTop: 70}}/>
                <Input style={{marginTop: 20}} placeholder="Enter your email" onChangeText={setEmail} value={Email}/>
                <ButtonClick text='Continue' style={styles.signUp} onPress= {async () => { OnClick(Email)}} />
                <View style={{marginTop: 20}}>
                    {/* {userRegister ? <Text >Email has been registered</Text> : null} */}
                    <Text style={{color: '#FE4E4E'}}>{error}</Text>
                </View>
            </ScrollView>
            <Loading loading={loading}/>

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
        width: '100%',
        height: '100%',
        marginTop: 40,
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
       
})

const ConnectedRegister = (state) => {
    return {
        user: state.auth
    }
}

const mapDispatchToState = dispatch => {
    return{
        keepUsername: (username) => dispatch(keepUsername(username))
    }
}

export default connect(ConnectedRegister, mapDispatchToState)(SignUp)