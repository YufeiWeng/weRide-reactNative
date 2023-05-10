import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
const car = require('../../assets/images/book_time/car_logo.png');


const TripInfo = ({pickupTime, tripFare, id}) => {
    var floorVal = Math.floor(tripFare)
    var celiVal = floorVal + 1
    var rowColor = '#f5f5f5'
    if (id % 2 != 0) {
        rowColor = '#d3d3d3'
    }
    return (
        
        <View style={{
            flexDirection:"row", 
            marginTop: 20,
            backgroundColor: rowColor,
            borderColor:'#d3d3d3',
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5

            }}>
            <Image source={car} style={styles.car}/>
            <Text style={styles.time}>{pickupTime}</Text>
            <Text style={styles.arriveTime}>Arrive Time</Text>
            <Text style={styles.cost}>${floorVal} ~ ${celiVal}</Text>
        </View>
        
    );
};

export default TripInfo;
