import React, {useContext, useEffect} from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import HeaderTitle from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import {AuthContext} from '../../../Utils/Context/AuthContext'
import {UserContext} from '../../../Utils/Context/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Searchbar from '../../Components/HomeCom/Searchbar'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from "react-native-elements";
import HeaderRight from "../../Components/HomeCom/HeaderRight"
import Slider from '../../Components/HomeCom/Slider'
import { Platform } from 'react-native'
import { ScrollView } from 'react-native'
import ServiceType from '../../Components/HomeCom/ServiceType'
import Title from '../../Components/HomeCom/Title'
import ServiceSlide from '../../Components/HomeCom/ServiceSlide'
import { data } from '../../../Utils/Data/data'
import BlogSlider from '../../Components/HomeCom/Blogs/BlogSlider'
import GallerySlider from '../../Components/HomeCom/Gallery/GallerySlider'

// const slides = [
//     {
//       key: 'one',
//       title: 'Title 1',
//       text: 'Trải nghiệm mua sắm tại hơn 150\ncửa hàng cùng CashBack.',
//       image: "http://edanabeauty.com.au/wp-content/uploads/revslider/Boxedslider/home2_slide31.jpg",
//       backgroundColor: '#59b2ab',
//     },
//     {
//       key: 'two',
//       title: 'Title 2',
//       text: 'Nhận hoàn tiền vào tài khoản CashBack\ncủa bạn',
//       image: "http://edanabeauty.com.au/wp-content/uploads/revslider/Boxedslider/home2_slide21.jpg",
//       backgroundColor: '#febe29',
//     },
//     {
//       key: 'three',
//       title: 'Rocket guy',
//       text: 'Rút tiền hoàn một cách dễ dàng vào\ntài khoản ngân hàng của bạn',
//       image: "http://edanabeauty.com.au/wp-content/uploads/2021/05/menu_attachment_257457214186-e1621926977586.jpeg",
//       backgroundColor: '#22bcb5',
//     }
//   ];
const HomeScreen = ({navigation}) => {


    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <Searchbar  text='Register' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: {
                    position: 'absolute',
                },
                headerBackTitleVisible: false,
               
             
                headerRight: () => <TouchableOpacity style={{ marginRight: 10}} activeOpacity={1}>
                                    <Icon name='qr-code-outline' size={29} color='#fff' style={{justifyContent: 'center', alignItems: 'center'}}/>
                                    </TouchableOpacity>
            }
        )
    },[navigation]
    )

    useEffect(() => {
          AsyncStorage.getItem('@token').then((token) => {
           
            //   console.log(token)
          })
    }, [])
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* <Slider data = {slides} style={styles.Slider}/> */}
            <Image source={{uri: 'http://edanabeauty.com.au/wp-content/uploads/2021/05/menu_attachment_257457214186-e1621926977586.jpeg'}} style={styles.image}/>
            <ServiceType />
            <Title title='Nail Service'/>
            <ServiceSlide data={data.Service_Types.Nail_Service.Service}/>
            <Title title='Blogs'/>
            <BlogSlider data={data.Service_Types.Nail_Service.Service}/>
            <Title title='Gallery'/>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{alignSelf: 'center'}}>
                             <GallerySlider data={data.Service_Types.Nail_Service.Service}/>
            </ScrollView>
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       backgroundColor: '#fff'
    },
    HeaderStyle: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    image:{
        width: Platform.OS == 'ios' ? 350 : 350, 
        height: 200,
        marginTop: Platform.OS == 'ios' ? 100 : 60,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
    }
})

export default HomeScreen