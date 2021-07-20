import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'
import SignUp from './SignUp';
import HeaderTitle from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import LinearGradient from 'react-native-linear-gradient'
import ForgotPassword from './ForgotPassword'
import AuthScreen from './AuthScreen'
import PersonInfor from './PersonInfor'
import { connect } from 'react-redux';
const AuthStack = createStackNavigator();


const AuthStackNav = () => {
    return (
            <AuthStack.Navigator >
                {/* <AuthStack.Screen name="AuthScreen" component={AuthScreen}/> */}
                <AuthStack.Screen name='Login' component={LoginScreen}/>
                <AuthStack.Screen name='SignUp' component={SignUp} />
                <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
                <AuthStack.Screen name='PersonInfor' component={PersonInfor} />
            </AuthStack.Navigator>
    )
}

export default connect()(AuthStackNav);