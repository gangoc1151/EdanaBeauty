import React , {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'
import HeaderTitle from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import HeaderRight from "../../Components/HomeCom/HeaderRight"
import Header from '../../Components/General/HeaderTitle'
import {data} from '../../../Utils/Data/data'
import { Dimensions } from 'react-native'
import ServiceList from '../../Components/Booking/ServiceList'
import { ScrollView } from 'react-native'
import Title from '../../Components/HomeCom/Title'
import ServiceType from '../../Components/Booking/ServiceType/ServiceType'
import ButtonClick from '../../Components/Button/ButtonClick'
import { ColorLib } from '../../Style/ColorLib'
import ServiceTypeItem from '../../Components/Booking/ServiceType/ServiceTypeItem'
import {connect} from 'react-redux'

// const examdata = (data) => {
//     var example = []
//     var i = 0;
//     while (i < 4){
//         example.push(data[i])
//         i++
//     }
//     return example;
// }
const Booking = ({navigation, booking}) => {

    const [Service, SetService] = useState(null)
    const [error, SetError] = useState(null)
    const moveToCart = () => {
            navigation.navigate('Service Detail List')
    }
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <View><Header text='Service'/></View>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                // headerTransparent: {
                //     position: 'absolute',
                // },
                headerBackTitleVisible: false,
               
             
                headerRight: ({navigation}) =>  <HeaderRight onPress={()=> moveToCart()}/>
            }
        )
    },[navigation]
    )

    const Selected = (req) => {
        // console.log('test', e)
        SetService(req)
    }

    const OnBooking = () => {
        // if (Service){
        //     console.log(Service)
        // }else{
        //     console.log('fail')
        // }
        console.log(booking)
        navigation.navigate('NoPeople', {Service: Service})
        
    }

    return (
        
            <View style={{flex: 1, }}>
                {/* <View style={{marginTop: 90}} />
                <Title title='Nail Service'/>
                <ScrollView
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                style={{alignSelf: 'center'}}>
                    <ServiceList data={examdata(data.Service_Types.Nail_Service.Service)} onPress={() => navigation.navigate('Service List')}/>
                </ScrollView>
                <Title title='Nail Service'/>
                <ScrollView
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                style={{alignSelf: 'center'}}>
                    <ServiceList data={examdata(data.Service_Types.Nail_Service.Service)}/>
                </ScrollView>
                <Title title='Nail Service'/>
                <ScrollView
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                style={{alignSelf: 'center'}}>
                    <ServiceList data={examdata(data.Service_Types.Nail_Service.Service)}/>
                </ScrollView> */}
                <View style={{flex: 1}}>
                    {/* <ServiceType /> */}
                    <View style={styles.ServiceList}>
                        <ServiceTypeItem    source={require('../../src/image/Service/NailsService.png')} 
                                            serviceText='Nail Services' 
                                            selectedStyle={Service == 'Nail' && styles.selectedStyle}
                                            onPress={() => {Selected('Nail')}}
                                            />
                        <ServiceTypeItem    source={require('../../src/image/Service/Beauty.png')} 
                                            serviceText='Beauty Skincare'
                                            onPress={() => {Selected('Beauty')}}
                                            selectedStyle={Service == 'Beauty' && styles.selectedStyle}
                                            />
                        <ServiceTypeItem    source={require('../../src/image/Service/massage.png')} 
                                            serviceText='Massage'
                                            onPress={() => {Selected('Massage')}}
                                            selectedStyle={Service == 'Massage' && styles.selectedStyle}
                                            />
                    </View>
                </View>

                
                
                <ButtonClick    text='Book an appointment' 
                                style={styles.login} 
                                textStyle={styles.textStyle} 
                                onPress={() => OnBooking()}
                />
            </View>
      
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 90
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
    },
    login:{
        backgroundColor: ColorLib.buttonColor1,
        width: 310,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 40
       },
    textStyle:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    },
    ServiceList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    selectedStyle: {
        borderColor: '#DC355E',
        borderWidth: 1
    }
})

const ConnectedBooking = (state) => {
    return {
       booking: state.booking
    }
}

export default connect(ConnectedBooking)(Booking)