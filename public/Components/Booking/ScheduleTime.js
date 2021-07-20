import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const ScheduleTime = ({data}) => {
    return (
        <View style={{}}>
            <FlatList 
              
              data={data}
              keyExtractor = {(item, index) => 'key' + index}
              scrollEnabled={false}
              nestedScrollEnabled
              numColumns={3} 
              renderItem={({item})=>{
                  return(
                      <View style={styles.time}>
                            <View style={{flexDirection: 'row'}}>  
                                <Text>8:00</Text> 
                                <Text> am</Text>
                            </View>
                           
                      </View>
                     
                  )
              }}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    time: {
        marginVertical: 10,
         marginHorizontal: 5, 
         borderColor: '#DFDFDF',
         borderWidth: 1,
         width: 110,
         height: 40,
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 30
    }
})

export default ScheduleTime