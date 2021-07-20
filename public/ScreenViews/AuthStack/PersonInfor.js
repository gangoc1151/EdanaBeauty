import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HeaderTitle from '../../Components/General/HeaderTitle';
import GradientHeader from '../../Components/General/Header'
import Input from '../../Components/Input/TextInput'
import ButtonClick from '../../Components/Button/ButtonClick'
import {ColorLib} from '../../Style/ColorLib'
import PasswordInput from '../../Components/Input/PasswordInput'
import {connect} from 'react-redux'
import { register } from '../../../Utils/Redux/userAuth/userAuthAction';
import {Loading} from './Loading'
import { sleep } from '../../../Utils/sleep';
const PersonInfor = ({navigation, route, register, user}) => {
    const { email } = route.params;
   
    const [Name, SetName] = useState('')
    const [Phone, SetPhone] = useState('')
    const [Password, SetPassword] = useState('')
    const [CPassword, SetCPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [error, SetError] = useState(null)
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Information' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: {
                    position: 'absolute',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerRight: () =>  <View></View>
                // headerLeft: () => <View></View>,
                // headerRight: () =>  <Icon name='close' size={26} color='#000' style={{justifyContent: 'center', alignItems: 'center', marginRight: 5}}/>
            }
        )
    },[navigation]
    )

    const OnRegister = async ( email, name, phone, password, cpassword) => {
     
        await setLoading(true)
        await sleep(2000)
        await register(email, name, phone, password, cpassword)
        // navigation.navigate('Login')
      
        await setLoading(false)
        
  
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.box} showsVerticalScrollIndicator = {false} keyboardShouldPersistTaps="handled"  nestedScrollEnabled={true}>
                <Image source={require('../../src/image/Edana-Beauty.png')} style={{ width: 250, height: 220, resizeMode: 'stretch', marginTop: 70}}/>
                        <Input style={{marginTop: 20}} placeholder="Account name" onChangeText={SetName} value={Name}/>
                        <Input style={{marginTop: 20}} placeholder="Phone Number"   keyboardType = 'numeric' onChangeText={SetPhone} value={Phone} />
                        <PasswordInput placeholder="Password" style={{marginTop: 20}} onChangeText={SetPassword} value={Password}/>
                        <PasswordInput placeholder="Confirm Password" style={{marginTop: 20}} onChangeText={SetCPassword} value={CPassword}/>
                        <ButtonClick text='Register' style={styles.signUp} onPress={() => {OnRegister( email, Name, Phone, Password, CPassword)}}/>
                        <View style={{marginTop: 20}}>
                            {user.error ? <Text style={{color: '#FE4E4E'}}>{user.error}</Text> : null}
                        </View>
                        <View style={{marginBottom: 200}}></View>
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
})
const ConnectedRegister = (state) => {
    return {
        user: state.auth
    }
}

const mapDispatchToState = dispatch => {
    return {
        register: (email, name, phone, password, cpassword) => dispatch(register(email, name, phone, password, cpassword)),
    }
}
export default connect(ConnectedRegister, mapDispatchToState)(PersonInfor) 