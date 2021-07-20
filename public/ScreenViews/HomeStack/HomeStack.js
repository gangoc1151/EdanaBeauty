import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import Shop from './Shop';
import Booking from './Booking';
import Account from './Account';
import Notification from './Notification';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ColorLib} from '../../Style/ColorLib'
import BlogsScreen from './BlogsScreen';
import ServiceBookingList from '../BookingScreens/ServiceBookingList';
import ServiceDetailList from '../BookingScreens/ServiceDetailList';
import BookingHistory from '../Account/BookingHistory';
import NoPeople from '../BookingScreens/NoPeople';
import ChooseService from '../BookingScreens/ChooseService';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const home = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
    )
    
}
const account = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="BookingHistory" component={BookingHistory}/>
    </Stack.Navigator>
    )
    
}

const booking = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Booking" component={Booking}/>
        <Stack.Screen name="Service List" component={ServiceBookingList} />
        <Stack.Screen name="NoPeople" component={NoPeople}/>
        <Stack.Screen name="ChooseService" component={ChooseService} />
    </Stack.Navigator>
    )
}

const blogScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BlogScreen" component={BlogsScreen}/>
        </Stack.Navigator>
    )
}
const NotificationScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='NotificationScreen' component={Notification}/>
        </Stack.Navigator>
    )
}

const AuthStackNav = () => {
    return (
            <Tab.Navigator >
                {/* <AuthStack.Screen name="AuthScreen" component={AuthScreen}/> */}
                <Tab.Screen name='Home' component={home}
                    options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='home' size={20} color= {focused ? ColorLib.headerColor2: '#B5B5B7'} />
                            
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? ColorLib.headerColor2: '#B5B5B7',
                                fontSize: 10
                            }}>Home</Text>
                    )
                    }}
                />
                <Tab.Screen name='BlogScreen' component={blogScreen}
                    options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='basket' size={20} color= {focused ? ColorLib.headerColor2: '#B5B5B7'} />
                            
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? ColorLib.headerColor2: '#B5B5B7',
                                fontSize: 10
                            }}>BlogScreen</Text>
                    )
                    }}
                />
                <Tab.Screen name='Booking' component={booking}
                    options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='calendar' size={20} color= {focused ? ColorLib.headerColor2: '#B5B5B7'} />
                            
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? ColorLib.headerColor2: '#B5B5B7',
                                fontSize: 10
                            }}>Booking</Text>
                    )
                    }}
                />
                <Tab.Screen name='Notification' component={NotificationScreen}
                    options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='notifications' size={20} color= {focused ? ColorLib.headerColor2: '#B5B5B7'} />
                            
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? ColorLib.headerColor2: '#B5B5B7',
                                fontSize: 10
                            }}>Notification</Text>
                    )
                    }}
                />
                <Tab.Screen name='Account' component={account}
                    options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='person' size={20} color= {focused ? ColorLib.headerColor2: '#B5B5B7'} />
                            
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? ColorLib.headerColor2: '#B5B5B7',
                                fontSize: 10
                            }}>Account</Text>
                    )
                    }}
                />

            </Tab.Navigator>
    )
}

export default AuthStackNav;