import { Avatar } from "react-native-elements";
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderRight = ({onPress, navigation}) => {
    return (
        <TouchableOpacity style={{ marginRight: 10, flexDirection: 'row', marginBottom: 10}} activeOpacity={1} onPress={onPress}>
                <Icon name='cart' size={29} color='#fff' style={{justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0}}/>
                <Avatar
                    size={14}
                    rounded
                    title="1"
                    overlayContainerStyle={{backgroundColor: '#FF0000', borderWidth: 1, borderColor: '#fff'}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default HeaderRight