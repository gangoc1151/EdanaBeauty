import React, {useState, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext'
import {
  View,
  
} from 'react-native';
import index from '../Configs/index'
const authReducer = (state, action) => {
  switch (action.type) {
    case 'error_signIn':
      return{
        ...state,
        errorMessage: action.payload
      }
    case 'Success_Login':
      return{
        ...state,
        errorMessage: '',
        token: action.payload
      }
    default:
      return state;
  }
}

const SignIn = dispatch => {
  return async (email, password) => {
    try{
      const response =  await index.post('/api/user/auth/login/', { email, password})
      const user = {
        email: response.data.email,
        token: response.data.token
      }
      const save = await AsyncStorage.setItem('token', response.data.token)

      const data = await AsyncStorage.getItem('token')
      // console.log(data)

      
      dispatch({type: 'Success_Login', payload: response.data.token})
    }
    catch(err) {
      dispatch({type: 'error_signIn', payload: 'User or Password is not correct'})
    }
   

  }
}

const SignUp = (dispatch) => {
  return ({email, password}) => {
    

  }
}

const SignOut = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {SignIn, SignUp, SignOut},
  {token: null, errorMessage: ''}
)
//
export const AuthContext = createContext();