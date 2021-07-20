import React, {useContext, useEffect} from 'react';
import {sleep} from '../sleep' 
import index from '../Configs/index'
import {createAction} from '../Context/createAction'
import AsyncStorage from '@react-native-async-storage/async-storage';
export function userHooks() {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch(action.type) {
            case 'SET_USER': 
              return {
                ...state,
                user: {...action.payload}
              }
            case 'LOG_OUT':
              return {
                ...state,
                user: undefined
              }
            default: 
              return state;
        }
    },{
          user: undefined
    })


    const userInfor = React.useMemo(() => ({
        login: async (email, password) => {
              await console.log('login', email, password)
              await sleep(2000)
              const data = await index.post('/api/user/auth/login/', {
                  email,
                  password
                })
              const user = {
                email: data.data.email,
                token: data.data.token
              }
              await AsyncStorage.setItem('@token', data.data.token)
              await AsyncStorage.setItem('@user', JSON.stringify(user))
              dispatch(createAction('SET_USER', user))
        },
        logout: async () => {
            await AsyncStorage.removeItem('@token')
            await AsyncStorage.removeItem('@user')
          dispatch(createAction('LOG_OUT'))
        },
        register: () => {
              console.log('register')
            }
        }),
        [],
    );
    
    useEffect(() => {
            AsyncStorage.getItem('@user').then((user) => {

                if (user){
                    // console.log(user)
                    dispatch(createAction('SET_USER', user))
                }
              

            })
        }, [])
      return {userInfor, state}
}