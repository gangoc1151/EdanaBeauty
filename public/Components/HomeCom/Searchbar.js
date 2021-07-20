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
  TouchableOpacity
} from 'react-native';
// import Iconclosebutton from '../Components/Iconclosebutton'
import Icon from 'react-native-vector-icons/Ionicons';
import {ColorLib} from '../../Style/ColorLib';

const Searchbar = ({text, onPress, HeaderStyle}) => {
    return (
        <View style={ styles.container} >
            <View style={styles.Searchbar}>
                
                <Icon name='search' size={25} color={ColorLib.headerColor2}/>
                <TextInput placeholder='Search' style={{width: '80%', marginLeft: 4}}></TextInput>
            </View>
            
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '95%',
       
    },
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    headerText: {
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
        fontWeight: '400',
        fontFamily: 'Arial'
        
    },
    closebutton: {
        position:'absolute',
        alignItems: 'center',
        right: 0,
    },
    Searchbar:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 20,
        height: 35,
       alignItems: 'center',
       paddingLeft: 10
    }
})

export default Searchbar;