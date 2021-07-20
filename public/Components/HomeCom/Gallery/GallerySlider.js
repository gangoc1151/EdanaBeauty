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
  Image
} from 'react-native';
import GalleryItem from './GalleryItem';
const GallerySlider = ({data, style}) => {
    return (
        <View style={{marginTop: 9}}>
            {/* <View>
                <ServiceItem />
            </View> */}
            {/* <FlatList data={data} 
                    keyExtractor = {(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment= 'center'
                    scrollEventThrottle ={16}
                    decelerationRate = {'fast'}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => {
                   
                    return (
                    <View style={styles.image}>
                        <GalleryItem text={item.ServiceName}/>
                    </View>
                    )
                }}
            /> */}

            <FlatList 
              
              data={data}
              keyExtractor = {(item, index) => 'key' + index}
              scrollEnabled={false}
              nestedScrollEnabled
              numColumns={3} 
              renderItem={({item})=>{
                  return(
                      <View style={{marginVertical: 5, marginHorizontal: 5}}>
                        <Image source={{uri: 'http://edanabeauty.com.au/wp-content/uploads/2021/05/menu_attachment_257457214186-e1621926977586.jpeg'}} style={styles.image}/>
                      </View>
                     
                  )
              }}
              
          />
        </View>
    )
}

const styles = StyleSheet.create ({
    image:{
        width: 150, 
        height: 150,
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        borderRadius: 10
        
    }
})

export default GallerySlider