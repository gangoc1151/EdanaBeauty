import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import HeaderTitle from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
const Shop = ({navigation}) => {
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <HeaderTitle text='Register' onPress={()=> navigation.navigate('SignUp')}/>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: {
                    position: 'absolute',
                },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                // headerLeft: () => <View></View>,
                // headerRight: () =>  <Icon name='close' size={26} color='#000' style={{justifyContent: 'center', alignItems: 'center', marginRight: 5}}/>
            }
        )
    },[navigation]
    )
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Shop