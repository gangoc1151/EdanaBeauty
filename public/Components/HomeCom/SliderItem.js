import React from 'react';
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
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

const SliderItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: 'center',
    },
    image: {
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        paddingStart: 30,
        paddingEnd: 30,
        width: 300,
        height: 200,
        resizeMode: 'contain'
    },
    
})
export default SliderItem