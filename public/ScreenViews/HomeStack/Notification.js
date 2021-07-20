import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import HeaderTitle from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import { ScrollView } from 'react-native'
import { data } from '../../../Utils/Data/data'
import NotificationItem from '../../Components/Notification/NotificationItem'
const Notification = ({navigation}) => {
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Notification' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                // headerTransparent: {
                //     position: 'absolute',
                // },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                // headerLeft: () => <View></View>,
                // headerRight: () =>  <Icon name='close' size={26} color='#000' style={{justifyContent: 'center', alignItems: 'center', marginRight: 5}}/>
            }
        )
    },[navigation]
    )
    return (
       
            <FlatList data={data.Service_Types.Nail_Service.Service} 
                    
                    keyExtractor = {(item, index) => 'key' + index}
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment= 'center'
                    scrollEventThrottle ={16}
                    decelerationRate = {'fast'}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => {
                    return (
                    <View style={{borderBottomColor: '#C7C7C7', borderBottomWidth: 1}}>
                        <NotificationItem />
                    </View>
                    )}
            }/>
       
    )
}

const styles = StyleSheet.create({

})

export default Notification