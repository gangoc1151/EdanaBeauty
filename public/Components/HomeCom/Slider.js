import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  Dimensions, Animated,
  FlatList
} from 'react-native';

import SliderItem from './SliderItem'

const {width, height} = Dimensions.get('window');
// let Flatlist;

// function infiniteScroll(datalist){
//     const numberofData = datalist.length;
//     let scrollValue = 0, scrolled=0;
//     setInterval(()=>{
//         scrolled ++;
//         if (scrolled < numberofData)
//         {
//             scrollValue = scrollValue + width
//         }
//         else{
//             scrolled = 0
//             scrollValue = 0
//         }

//         this.Flatlist.scrollToOffset({animated: true, offset: scrollValue})
//     }, 3000)
// }

const scrollX = new Animated.Value(0);
let position = Animated.divide(scrollX, width)
const Slider = ({data}) => {
    // const [datalist, setdatalist] = useState(data)
    // useEffect(()=>{
    //     setdatalist(data)
    //     infiniteScroll(datalist)
    // })
    if (data && data.length){
        return (
            <View style={styles.Slider}>
                <FlatList data={data}
                // ref={(Flatlist)=> {this.Flatlist = Flatlist}}
                    keyExtractor = {(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment= 'center'
                    scrollEventThrottle ={16}
                    decelerationRate = {'fast'}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => {
                        return <SliderItem item={item} />
                    }}
                    onScroll = {Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {useNativeDriver: false}
                    )}
                />
                <View style= {styles.dotView}>
                    {data.map((_,i)=>{
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{opacity, height: 10, width: 10, backgroundColor: "#595959", margin: 8, borderRadius: 5}}
                                >
                                </Animated.View>
                        )
                    })}
                </View>
                    
                
            </View>
        )
    }
    console.log('error')
    return null
}
const styles = StyleSheet.create({
    dotView: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
})
export default Slider