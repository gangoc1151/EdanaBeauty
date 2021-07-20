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
import ServiceItem from '../../Components/HomeCom/ServiceItem';

import GradientHeader from '../../Components/General/Header';
import Header from '../../Components/General/HeaderTitle';
import HeaderRight from '../../Components/HomeCom/HeaderRight';
import { data } from '../../../Utils/Data/data'
import BookingItem from '../../Components/Booking/BookingItem';

const ServiceBookingList = ({ navigation}) => {

    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <View><Header text='Service'/></View>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: {
                    position: 'absolute',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
            }
        )
    },[navigation]
    )
    
    return (
            <FlatList 
                    data={data.Service_Types.Nail_Service.Service[0].Service}
                    style={{marginTop: 90, }}
                    keyExtractor = {(item, index) => 'key' + index}
                    // pagingEnabled
                    showsVerticalScrollIndicator={false}
                    scrollEnabled
                    snapToAlignment= 'center'
                    scrollEventThrottle ={16}
                    decelerationRate = {'fast'}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => {
                    return (
                    <View style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 1}}>
                        <BookingItem text={item.Name} price={item.Price}/>
                    </View>
                    )}
            }/>
    )
}

const styles = StyleSheet.create ({
    container:{
        // marginTop: 90
    },
    image:{
        width: Dimensions.get('window').width / 2 - 20, 
        height: Dimensions.get('window').width / 2 - 20,
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        borderRadius: 10,
    },
    FlatlistStyles: {
        alignSelf: 'center'
    }
})

export default ServiceBookingList