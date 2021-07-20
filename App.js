import React, {useContext, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen'

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNav from './public/ScreenViews/AuthStack/AuthStack';
import HomeStack from './public/ScreenViews/HomeStack/HomeStack';
//Contexts
import {Provider as AuthProvider, AuthContext} from './Utils/Context/AuthContext'
import {UserContext} from './Utils/Context/UserContext';

import {SafeAreaProvider} from 'react-native-safe-area-context'
import index from './Utils/Configs/index'
import {sleep} from './Utils/sleep'
import {createAction} from './Utils/Context/createAction'
import {useAuth} from './Utils/Hooks/useAuth'



import ServiceDetailList from './public/ScreenViews/BookingScreens/ServiceDetailList';
import ScheduleAndPayment from './public/ScreenViews/BookingScreens/ScheduleAndPayment';
import DoneBooking from './public/ScreenViews/BookingScreens/DoneBooking';
import BookingHistory from './public/ScreenViews/Account/BookingHistory';
import ResetPassword from './public/ScreenViews/Account/ResetPassword';
import Notification from './public/ScreenViews/Account/Notification';
import Language from './public/ScreenViews/Account/Language'
import HelpCenter from './public/ScreenViews/Account/HelpCenter';



import SplashView from './public/ScreenViews/AuthStack/SplashView';
import Version from './public/ScreenViews/Account/Version';
import { login } from './Utils/Redux/userAuth/userAuthAction';
import { SetNavigator, navigationRef } from './public/ScreenViews/navigationRef';
// import { userHooks } from './Utils/Hooks/userHooks';
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
// import ConfigStore from './Utils/Redux/store/ConfigStore';
import configureStore from './Utils/Redux/store/ConfigStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from './Utils/Redux/userAuth/userAuthAction';
const Stack = createStackNavigator();
// const store = ConfigStore()
const {store} = configureStore()

function App(props) {
  
  const [hideSplash, setHideSplash] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 1000); // amount of time the splash is shown from the time component is rendered
  }, []);
  React.useEffect(() => {
    hideSplash && SplashScreen.hide();
  }, [hideSplash]);

  const AppWithNav = (props) => {
    const [reToken, setReToken] = useState(null)

    useEffect(() => {
      AsyncStorage.getItem('@token').then((token) => {
        
        if (token) {
          setReToken(token)
          props.getUser()
          // console.log(props.user)
        }else{
          setReToken(null)
        }
      })

    })
  
    return (
      <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false}}>
      {reToken ? (
        <>
        <Stack.Screen name="HomeStack" component={HomeStack}/>
        <Stack.Screen name="Service Detail List" component={ServiceDetailList}/>
        <Stack.Screen name="ScheduleAndPayment" component={ScheduleAndPayment}/>
        <Stack.Screen name='DoneBooking' component={DoneBooking} />
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='NotificationSetting' component={Notification} />
        <Stack.Screen name='Language' component={Language} />
        <Stack.Screen name='HelpCenter' component={HelpCenter}/>
        <Stack.Screen name='Version' component={Version}/>
        </>
      ) :(
          <>
          <Stack.Screen name="AuthStack" component={AuthStackNav} />
          </>)
      }
      
    </Stack.Navigator>
    )
  }
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
  const AppWithNavigation =  connect(mapPropsToState, mapDispatchToState)(AppWithNav)
 
  return (
   
    <Provider store={store}>
    
      <NavigationContainer  ref={navigationRef}>
          <AppWithNavigation />
      </NavigationContainer>
    </Provider>
  );
}


export default App;