import React, {useContext, useEffect} from 'react';
import {sleep} from '../sleep' 
import index from '../Configs/index'
import {createAction} from '../Context/createAction'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetUser } from './api';
export function useAuth() {
    const user = {
      email: '',
      token: '',
      username: '',
      is_active: '',
      is_staff: '',
      login: false,
      register: false
    }
    const userRegister = {
      email: "",
      password: "",
      username: "",
      phone: "",
    }
    const [state, dispatch] = React.useReducer((state, action) => {
        switch(action.type) {
            case 'SET_USER': 
              return {
                ...state,
                user: {...action.payload},
            
              }
            case 'LOG_OUT':
              return {
                ...state,
                user: undefined
              }
            case 'REGISTER':
              return {
                ...state,
                userRegister: {...action.payload}
              }
            default: 
              return state;
        }
        },{
          user: undefined,
          userRegister: undefined
         })


      const auth = React.useMemo(() => ({
        login: async (email, password) => {
              // await console.log('login', email, password)
              await sleep(2000)
           
              const data = await index.post('/api/user/auth/login/', {email,password})
              const user = {
                email: data.data.email,
                token: data.data.token,
                username: data.data.username,
                is_active: data.data.is_active,
                is_staff: data.data.is_staff,
                login: true
              }
              // console.log(user.email)
              await AsyncStorage.setItem('@token', data.data.token)
              // await console.log(AsyncStorage.getItem('@token').JSON)
              await AsyncStorage.setItem('@user', JSON.stringify(user))
              dispatch(createAction('SET_USER', user))
        },
        logout: async () => {
            await AsyncStorage.removeItem('@token')
            await AsyncStorage.removeItem('@user')
            const user ={
              email: '',
              token: '',
              username: '',
              is_active: '',
              is_staff: '',
              register: false,
              login: false
            }
          dispatch(createAction('LOG_OUT', user))
        },
        register: async (username, email, phone, password) => {
                await sleep(2000)
                  const register ={
                    email: username,
                    password: email,
                    username: phone,
                    phone: password,
                  }
                 await console.log(register)
                 await dispatch(createAction('REGISTER', register))
                 await console.log(state.userRegister)
    
            }
        }),
        [],
      );
      useEffect(() => {
            AsyncStorage.getItem('@user').then((user) => {
                if (user){
                    console.log(user)
                    dispatch(createAction('SET_USER', JSON.parse(user)))
                }
            })
        }, [])
      return {auth, state}
}