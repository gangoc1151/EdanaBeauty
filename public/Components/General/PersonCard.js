import React from 'react'
import { TouchableOpacity } from 'react-native';
import {View, Text, Image, StyleSheet} from 'react-native'
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
const PersonCard = ({name, email}) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                {/* <Image  source={require('../../src/image/avatar.jpeg')} style={styles.image}/> */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Avatar
                        size="large"
                        rounded
                        source={require('../../src/image/avatar.jpeg')}
                        />
                    <View style={{marginLeft: 8}}>
                        <Text style={{color: '#fff'}}>{name}</Text>
                        <Text style={{color: '#fff'}}>{email}</Text>
                    </View>
                </View>
                <View style={{marginEnd: 10}}>
                    <TouchableOpacity activeOpacity={1}>
                        <Icon name='create-outline' size={30} color= {'#fff'} />
                    </TouchableOpacity>
                </View>

                
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10
    },
    box:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image:{
        width: 90,
        height: 90,
        borderRadius: 30
    }
})
export default PersonCard