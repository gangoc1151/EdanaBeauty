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
import ButtonClick from '../Button/ButtonClick';
import { ColorLib } from '../../Style/ColorLib';
const NotificationItem = ({data, style, navigation}) => {
    return (
        <View style={styles.container}>
           
           <Image source={{uri: 'http://edanabeauty.com.au/wp-content/uploads/2021/05/menu_attachment_257457214186-e1621926977586.jpeg'}} style={styles.image}/>

              <View style={{flex: 1, marginLeft: 10,}}>
                <Text style={styles.text}>Get Your Feet Ready for Beach Season</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's...</Text>
              </View>
              {/* <Text style={styles.text}>Get Your Feet Ready for Beach Season</Text> */}
           
         
        </View>
    )
}

const styles = StyleSheet.create ({
  container: {
   flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
   marginHorizontal: 10
  },
  image:{
    width: 100, 
    height: 100,
    shadowColor: "#000",
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    borderRadius: 10
  },
  text: {
    fontSize: 18,
    flexWrap: 'wrap',
    color: '#414858',
    fontWeight:'500'
  },
  textStyle:{
    color: '#fff',
    fontSize: 12,
    fontWeight: '500'
  },
  button: {
    backgroundColor: ColorLib.buttonColor1,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10
  }
})

export default NotificationItem