import React , {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'
import Header from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import ChooseServiceFrame from '../../Components/Booking/ServiceItem/ChooseService'
import { ScrollView } from 'react-native'
import ModalBooking from '../../Components/Booking/ModalBooking'
const ChooseService = ({navigation}) => {
    const [visible, SetVisible] = useState(false)
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <View><Header text='ChooseService'/></View>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                // headerTransparent: {
                //     position: 'absolute',
                // },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
               
             
                // headerRight: ({navigation}) =>  <HeaderRight onPress={()=> moveToCart()}/>
            }
        )
    },[navigation]
    )
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <ChooseServiceFrame />
            <ModalBooking InVisible={visible}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default ChooseService