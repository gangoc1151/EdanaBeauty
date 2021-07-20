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
  FlatList
} from 'react-native';
import ServiceItem from '../ServiceItem';
import BlogItem from './BlogItem';
const BlogSlider = ({data, style}) => {
    return (
        <View style={{marginTop: 9}}>
            {/* <View>
                <ServiceItem />
            </View> */}
            <FlatList data={data} 
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
                        <BlogItem text={item.ServiceName}/>
                    </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create ({

})

export default BlogSlider