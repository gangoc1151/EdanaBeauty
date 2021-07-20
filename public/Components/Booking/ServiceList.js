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
  Image,
  Dimensions
} from 'react-native';
import ServiceItem from '../HomeCom/ServiceItem';

const ServiceList = ({data, style, onPress}) => {

    
    return (
        <View style={{flex: 1}}>
        <View style={styles.container}>
            <FlatList style={styles.FlatlistStyles} 
            data={data}
            scrollEnabled={false}
            keyExtractor = {(item, index) => 'key' + index}
            numColumns={2} 
            renderItem={({item})=>{
              return(
                  <View style={{marginVertical: 5, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <ServiceItem text={item.ServiceName}  onPress={onPress}/>
                  </View>
                 
              )
          }}
            />
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        // marginTop: 90
    },
    image:{
        width: Dimensions.get('window').width / 2 - 20, 
        height: Dimensions.get('window').width / 2 - 20,
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        borderRadius: 10,
    },
    FlatlistStyles: {
        alignSelf: 'center'
    }
})

export default ServiceList