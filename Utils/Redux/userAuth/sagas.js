import index, {fetchApi, fetchApiLogin} from '../../Configs/index'
import { takeEvery, put, call, fork } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import actions from './userAuthAction'
import {navigate} from '../../../public/ScreenViews/navigationRef'
import { sleep } from '../../sleep'
export function* login({username, password}){

    let response = yield call(fetchApi, 'post', 'api/user/auth/login/', {email: username, password})
    console.log(response)
    if (response.token){
        AsyncStorage.setItem('@token', response.token)
        let uresponse = yield call(fetchApi, 'get', 'api/user/myProfile/show/')
        yield put ({
            type: actions.LOGIN_SUCCESSFULLY,
            data: uresponse
        })
        
        // console.log(uresponse)
    }else{
        yield put({
            type: actions.LOGIN_FAIL,
            data: response
        })

        console.log('error')
    }
    // console.log('test', username, password)

}
export function* getUser() {
    let uresponse = yield call(fetchApi, 'get', 'api/user/myProfile/show/');
    // console.log('test')
    if (uresponse) {
  
      yield put({
        type: actions.LOGIN_SUCCESSFULLY,
        data: uresponse
      });
    //   console.log(uresponse)
    }
  }

export function* keepUsername(username) {
    
    yield put({
        type: actions.KEEP_USERNAME,
        data: username.username
    })

    // console.log('test', username)
}

export function* register({email, name, phone, password, cpassword}){

    if (email == '' || name == '' || phone == '' || password == '' || cpassword == ''){
        return yield put({
            type: actions.SIGN_UP_FAIL,
            data: 'Please provide your information above'
        })
    }
    if (password != cpassword) {
        return yield put({
            type: actions.SIGN_UP_FAIL,
            data: 'Password does not match'
        })
    }

    let response = yield call(fetchApi, 'post', 'api/user/auth/signup/', {email, password, username: name, phone})
    let err
    // console.log(response.error)
    if (response.error){
        if(response.error && response.error.username){
            err = 'Username should have at least 5 characters'
        } else if(response.error && response.error.email){
           err = response.error.email[0]
        } else if(response.error && response.error.phone){
            err = 'Please provide your phone number'
         } else {
            err = 'User name must be between 6-30 characters and contain no special characters (e.g. space, #, $, %)'
         }
        // console.log(response)
        yield put({
            type: actions.SIGN_UP_FAIL,
            data: err
        })
    }
    else{
        yield put({
            type: actions.SIGN_UP_SUCCESS
        });
        navigate('Login')

    }
    // console.log(email, name)
}
export function* logout() {
    yield call(fetchApi, 'post', 'api/user/auth/logout')
  
    yield AsyncStorage.removeItem('@token')
  
    yield put({
      type: actions.LOGOUT_SUCCESS
    })
    console.log('test')
 
  }


export default function* rootSaga() {
    yield[
        yield takeEvery(actions.LOGIN, login),
        yield takeEvery(actions.GET_USER, getUser),
        yield takeEvery(actions.KEEP_USERNAME_REGISTER, keepUsername),
        yield takeEvery(actions.SIGN_UP, register),
        yield takeEvery(actions.LOGOUT, logout),
    ]
}