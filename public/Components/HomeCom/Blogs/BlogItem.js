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
  Image
} from 'react-native';

import { ColorLib } from '../../../Style/ColorLib';
const BlogItem = ({image, text, onPress}) => {
    return (
        <View>
            <View style={styles.Item}>
                <Image source={{uri: 'http://edanabeauty.com.au/wp-content/uploads/2021/05/menu_attachment_257457214186-e1621926977586.jpeg'}} style={styles.image}/>
                <Text style={{marginTop: 8, marginHorizontal: 10}}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    image:{
        width: 180, 
        height: 120,
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
        
    },
    Item:{
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 7
    },
    textStyle:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    },
    button: {
        backgroundColor: ColorLib.buttonColor1,
        width: 160,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
        marginVertical: 10
    }
    
})

export default BlogItem