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

const Title = ({title, onPress}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 13}}>
          
                <Text style={{fontSize: 20}}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={{color: '#197DE0'}}>See more</Text>
                </TouchableOpacity>
       
            
        </View>
    )
}

const styles = StyleSheet.create ({

})

export default Title