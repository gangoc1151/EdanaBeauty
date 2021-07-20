import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'
import { getUser } from '../../../Utils/Redux/userAuth/sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashView = (props) => {

    const  autoLogin = async () => {
        
        try { 
            var value = await AsyncStorage.getItem("@token");
            if (value){
                console.log('good')
                console.log(value)
                props.getUser()
                console.log(user)
            }
        }catch{

        }
    }

    useEffect(() => {
         autoLogin()
    }, [])
   
        return (
            <View style={styles.container}>
                <Text>
                    SplashView
                </Text>
               
            </View>
        )
    
}

const styles = StyleSheet.create({
    
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
        loginSuccess: (user) => {
            dispatch({ type: "LOGIN_SUCCESSFULLY", data: user })
        },
    }
}

export default connect(mapPropsToState, mapDispatchToState)(SplashView); 