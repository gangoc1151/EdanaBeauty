import React , {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Image, LayoutAnimation, TouchableOpacity} from 'react-native'
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { ColorLib } from '../../../Style/ColorLib';
import ServiceItem from './ServiceItem'

const ChooseServiceItem = () => {
    const [open, setOpen] = useState(false)
    const rotateZ = open ? '180deg' : '0deg'
    const height = open ? 'auto' : 0
    const borderWidth = open ? 1: 0
    return (
        <View>
            <TouchableOpacity style={[{backgroundColor: '#fff'},{ borderTopColor: '#C5C5C5',
                              borderTopWidth: 1}]}
                              activeOpacity={1}
                              onPress={()=> {
                              setOpen(prev => !prev)
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              }}>

                  <View style={styles.title}>
                    <Text style={{fontSize: 16, color: '#fff', marginLeft: 10}}>Person number 1</Text>
                      <View style={{transform: [{rotateZ}], marginRight: 10}}>
                        <Icon name='chevron-down' size={18} color='#fff'/>
                      </View>
                  </View>
                
              </TouchableOpacity>
           
              <View style={[styles.ServiceList, {height}, { borderWidth}]}>
                <View style={{marginHorizontal: 5, marginVertical: 5}}>
                    <ServiceItem imageSource={require('../../../src/image/Service/NailsService.png')}/>
                    <ServiceItem imageSource={require('../../../src/image/Service/NailsService.png')}/>
                    <ServiceItem imageSource={require('../../../src/image/Service/NailsService.png')}/>
                    <ServiceItem imageSource={require('../../../src/image/Service/NailsService.png')}/>
                    <ServiceItem imageSource={require('../../../src/image/Service/NailsService.png')}/>
                </View>
                        
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: ColorLib.headerColor2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10
  },
  ServiceList: {
   alignSelf: 'center',
    width: '90%',
    borderColor: '#DFDFDF',
   
  }
})

export default ChooseServiceItem