import React , {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'
import Header from '../../Components/General/HeaderTitle'
import GradientHeader from '../../Components/General/Header'
import NumericInput from 'react-native-numeric-input'
import { ColorLib } from '../../Style/ColorLib'
import ButtonClick from '../../Components/Button/ButtonClick'
import {connect} from 'react-redux'
import { setService } from './redux/actions'

const NoPeople = ({navigation, route, booking, setService}) => {
    const { Service } = route.params;
    const [numberPeople, SetNumber] = useState(0)
    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerShown: true,
                headerTitle: () => <View><Header text='Service'/></View>,
                header: (props) => <GradientHeader {...props} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                // headerTransparent: {
                //     position: 'absolute',
                // },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
               
             
                // headerRight: ({navigation}) =>  <HeaderRight onPress={()=> moveToCart()}/>
            }
        )
    },[navigation]
    )

    const OnClick = () => {
        setService(numberPeople, Service)
        // console.log(booking)
        navigation.navigate('ChooseService')
    }
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <Text style={{alignSelf: 'center', marginVertical: 10, fontSize: 17}}>Number of Seats</Text>
                <View style={styles.box}>
                    <Text style={{marginLeft: 10}}>Number of People</Text>
                    <View style={{marginRight: 10}}>
                    <NumericInput 
                
                    onChange={value => SetNumber(value)}  
                    minValue={0}
                    borderColor='#fff'
                    textColor={ColorLib.headerColor2}
                    totalWidth={90} 
                    separatorWidth={0}
                    totalHeight={30}
                    
                    totalHeight={40}
                    />
                    </View>
                    <Text>{numberPeople}</Text>
                    <Text>{Service}</Text>
                </View>
            </View>

            <ButtonClick    
                text='Next' 
                style={styles.login} 
                textStyle={styles.textStyle} 
                onPress={() => OnClick()}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        borderColor: '#DFDFDF',
        borderWidth: 1, 
        alignItems: 'center', 
        height: 50,
        borderRadius: 6
    },
    login:{
        backgroundColor: ColorLib.buttonColor1,
        width: 310,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 40
       },
    textStyle:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    },
})

const ConnectedBooking = (state) => {
    return {
       booking: state.booking
    }
}

const mapDispatchToState = dispatch => {
    return {
        // register: (email, name, phone, password, cpassword) => dispatch(register(email, name, phone, password, cpassword)),
        setService: (numberPeople, Service) => dispatch(setService(numberPeople, Service))
    }
}
export default connect(ConnectedBooking, mapDispatchToState)(NoPeople)