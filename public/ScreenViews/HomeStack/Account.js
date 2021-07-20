import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button,} from 'react-native'
import HeaderTitle from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import {AuthContext} from '../../../Utils/Context/AuthContext'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ColorLib} from '../../Style/ColorLib'
import PersonCard from '../../Components/General/PersonCard'
import { Platform } from 'react-native'
import SettingItem from '../../Components/AccountScreen/SettingItem'
import SettingBox from '../../Components/AccountScreen/SettingBox'
import { ScrollView } from 'react-native'
import { UserContext } from '../../../Utils/Context/UserContext'
import { connect } from 'react-redux'
import { logout } from '../../../Utils/Redux/userAuth/userAuthAction'
import Modal from 'react-native-modal';
import ModalLogout from '../../Components/AccountScreen/ModalLogout'
const Account = ({navigation, user, logout}) => {

    const [visible, SetVisible] = useState(false)
    const [userInfor, setUser] = useState('')
    const [emailInfor, setEmailInfor] = useState('')
  
    
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: false,
            }
        )
    },[navigation]
    )

    const OnLogout = async () => {
       
        await logout()
      
    }
    const showModal = () => {
        SetVisible(true)
    }
    useEffect(() => {
        setEmailInfor(user.email)
        setUser(user.username)   
    }, [] )


    
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[ColorLib.headerColor1, ColorLib.headerColor2]}
                style={styles.linearGradient}
            >
            <PersonCard name={userInfor} email={emailInfor}/>
            </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SettingBox title='Activity History'>
                    <SettingItem text='Booking History' icon="history" onPress={() => navigation.navigate('BookingHistory')}/>
                </SettingBox>
                <SettingBox title='Setting'>
                    <SettingItem text='Reset Password' icon="lock" onPress={() => navigation.navigate('ResetPassword')}/>
                    <SettingItem text='Notification Setting' icon="notifications" onPress={() => navigation.navigate('NotificationSetting')}/>
                    <SettingItem text='Language' icon="language" onPress={() => navigation.navigate('Language')}/>
                </SettingBox>
                <SettingBox title='Support'>
                    <SettingItem text='Help Center' icon="help" onPress={() => navigation.navigate('HelpCenter')}/>
                    <SettingItem text='Version' icon="info" onPress={() => navigation.navigate('Version')}/>
                    <SettingItem text='Log Out' icon="logout" onPress={() => showModal()}/>
                </SettingBox>
                <View style={{marginBottom: 50}}></View>
            </ScrollView>
            <ModalLogout InVisible={visible} onPressLogout={() => OnLogout()} onPressCancel={() => SetVisible(false)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    linearGradient:{
        height: Platform.OS == 'ios' ? 120 : 90
    }
})

const mapPropsToState = (state, ownProps) => {
    return {
        isFetching: state.auth.isFetching,
        isLogin: state.auth.isLogin,
        user: state.auth.user
    }
  }
  const mapDispatchToState = dispatch => {
    return {
        getUser: () => { dispatch(getUser()); },
        logout: () => dispatch(logout())

    }
  }

export default connect(mapPropsToState, mapDispatchToState)(Account)