import React from 'react';
import { TextInput } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import { data } from '../../../Utils/Data/data';
import GradientHeader from '../../Components/General/Header';
import Header from '../../Components/General/HeaderTitle';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonClick from '../../Components/Button/ButtonClick';
import NailBooking from './NailBooking';
import BeautyBooking from './BeautyBooking';
import MassageBooking from './MassageBooking';
import { ColorLib } from '../../Style/ColorLib';
import { Platform } from 'react-native';
const Tab = createMaterialTopTabNavigator();

const ServiceDetailList = ({navigation}) => {
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <View><Header text='In Cart'/></View>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: {
                    position: Platform.OS == 'ios' ? 'relative' : 'absolute',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
            }
        )
    },[navigation]
    )


    return (
       
        <SafeAreaProvider>
            <Tab.Navigator style={{marginTop: 90}}  
                    tabBarOptions={{
                        activeTintColor: ColorLib.headerColor2,
                        inactiveTintColor: '#000',
                        labelStyle: { fontSize: 13 },
                        headerTintColor: '#e91e63',
                        indicatorStyle: { backgroundColor: ColorLib.headerColor2},
                    }}>
                    <Tab.Screen name="Nail Service" component={NailBooking} />
                    <Tab.Screen name="Beauty" component={BeautyBooking} />
                    <Tab.Screen name='Massage' component={MassageBooking} />
                </Tab.Navigator>
                <ButtonClick text='Next' textStyle={styles.textStyle} style={styles.button} onPress={() => navigation.navigate('ScheduleAndPayment')}/>

        </SafeAreaProvider>
        
    )
}

const styles = StyleSheet.create({
    textStyle:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
      },
      button: {
        position: 'absolute',
        bottom:30,
        backgroundColor: ColorLib.buttonColor1,
        alignSelf: 'center',
        width: '75%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        

      }
})

export default ServiceDetailList