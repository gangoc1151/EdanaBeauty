import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
const weekDaysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarHeaderCom = (props) => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.dateText}>
            {this.props.headerData.calendarDate}
          </Text>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.props.onPressArrowLeft}
          >
            <Image
              style={[styles.icon, styles.leftIcon]}
             
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.props.onPressArrowRight}
          >
            <Image
              style={styles.icon}
             
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iconContainer, {
                opacity: this.props.horizontal ? 0.2 : 1
              }
            ]}
            onPress={this.props.onPressListView}
            disabled={this.props.horizontal}
          >
            <Image
              style={styles.icon}
             
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iconContainer, {
                opacity: this.props.horizontal ? 1 : 0.2
              }
            ]}
            onPress={this.props.onPressGridView}
            disabled={!this.props.horizontal}
          >
            <Image
              style={styles.icon}
            
            />
          </TouchableOpacity>
        </View>
        {
          // not showing week day in case of horizontal calendar, this will be handled by day component
          props.horizontal ?
            null
            :
            <View style={styles.week}>
              {weekDaysNames.map((day, index) => (
                <Text key={index} style={styles.weekName} numberOfLines={1}>
                  {day}
                </Text>
              ))}
            </View>
        }
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      header: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#eceef1'
      },
      week: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      weekName: {
        marginTop: 2,
        marginBottom: 7,
        width: 32,
        textAlign: 'center',
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#7c7c7c'
      },
      dateText: {
        flex: 6,
        fontSize: 18
      },
      iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      leftIcon: {
        transform: [{ rotate: '180deg' }]
      },
      icon: {
        width: 24,
        height: 24
      }
})

export default CalendarHeaderCom