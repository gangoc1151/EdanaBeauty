import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarHeaderCom from './CalendarHeaderCom';
import moment from 'moment'
import CalendarDayComponent from './CalendarDayComponent'
let calendarDate = moment();



const CalendarView = () => {

    const [calendarDate1, setCalendarDate] = useState(calendarDate.format('YYYY-MM-DD'))
    const onPressArrowLeft = () => {
        console.log('aa')
        setCalendarDate(calendarDate.add(-1, 'month'))
    }
    
    const onPressArrowRight = () => {
        setCalendarDate(calendarDate.add(-1, 'month'))
    }
    return (
        <View>
             <Calendar
                current={calendarDate1}
                // dayComponent={CalendarDayComponent}
                // dayComponent={CalendarDayComponent}
                // calendarHeaderComponent={CalendarHeaderCom}
                // headerData={{
                //     calendarDate: calendarDate.format('DD MMM, YYYY')
                // }}
                style={{
                    paddingLeft: 0, paddingRight: 0
                }}
                onPressArrowLeft={this.onPressArrowLeft}
                onPressArrowRight={this.onPressArrowRight}
                onPressListView={this.onPressListView}
                onPressGridView={this.onPressGridView}
                // markedDates={{
                //     '2019-02-23': {soldOut: false, blocked: false, inventory: 2},
                //     '2019-02-24': {soldOut: false, blocked: false, inventory: 2},
                //     '2019-02-25': {soldOut: false, blocked: true, inventory: 0},
                //     '2019-02-26': {soldOut: true, blocked: true, inventory: 2}
                // }}
                horizontal={true}
                onDayPress={this.onDayPress}
                />
  

        </View>
            
    )

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 0, 
        paddingRight: 0
    }
})

export default CalendarView