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

} from 'react-native';
import { data } from '../../../Utils/Data/data';
import InCartItem from '../../Components/Booking/InCartItem';
import ButtonClick from '../../Components/Button/ButtonClick';
import { ColorLib } from '../../Style/ColorLib';
const BeautyBooking = () => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}} showsVerticalScrollIndicator={false} >
           {/* <FlatList 
                    data={data.Service_Types.Nail_Service.Service[0].Service}
                    style={{flex: 1}}
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
                        <InCartItem text={item.Name} price={item.Price}/>
                    </View>
                    )}
            }/> */}
            {data.Service_Types.Nail_Service.Service[0].Service.map((item)=> {
                return (
                    <View key={item.Name} style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 1}}>
                        <InCartItem text={item.Name} price={item.Price}/>
                    </View>
                )
              
            })}
            <View  style={{marginBottom: 100}}/>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        color: '#fff',
        fontSize: 12,
        fontWeight: '500'
      },
      button: {
        // position: 'absolute',
        // bottom:30,
        backgroundColor: ColorLib.buttonColor1,
        width: '75%',
       
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginLeft: 50, 
      }
})
export default BeautyBooking