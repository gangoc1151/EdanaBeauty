import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button, Switch} from 'react-native'
import HeaderTitle from '../../Components/General/HeaderTitle'
import Input from '../../Components/Input/TextInput'
import ButtonClick from '../../Components/Button/ButtonClick'
import { ColorLib } from '../../Style/ColorLib'

import GradientHeader from '../../Components/General/Header'

const Notification = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Notification' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
            }
        )
    },[navigation]
    )
    return (
        <View>
            <View style={{backgroundColor: '#fff', marginTop: 16}}>
                <View style={styles.notification}>
                <Text style={{fontSize: 17}}>Turn on Notification </Text>
                <Switch
                        trackColor={{ false: "#767577", true: "#4BD963" }}
                        thumbColor={isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        size={10}
                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                    />
                </View>
            </View>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'space-between',
        marginHorizontal: 10
      
    }
})

export default Notification