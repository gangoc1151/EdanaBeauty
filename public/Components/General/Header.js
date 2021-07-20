import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {ColorLib} from '../../Style/ColorLib'
import LinearGradient from 'react-native-linear-gradient'
import { Header } from '@react-navigation/stack';
// import Iconclosebutton from '../Components/Iconclosebutton'


//https://stackoverflow.com/questions/52469579/transparent-background-for-header-using-createstacknavigator-react-native
//https://stackoverflow.com/questions/44924323/react-navigation-gradient-color-for-header
const GradientHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      <LinearGradient
        colors={[ColorLib.headerColor1, ColorLib.headerColor2]}
        style={[StyleSheet.absoluteFill, styles.linearGradient, props.LinearStyle]}
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }}/>
    </View>
  );

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
   
   
})

export default GradientHeader;