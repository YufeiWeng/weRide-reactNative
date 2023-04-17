import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import dummyTripData from '../../../constants/data/dummyTripData';

const RateBtn = ({isRated}) => {
  const rateDriver = () => {
    // todo
  };

  return (
    <TouchableOpacity disabled={isRated} onPress={rateDriver}>
      <View
        style={[
          styles.rateBtn,
          isRated ? {backgroundColor: '#96A0B5'} : {backgroundColor: '#172B54'},
        ]}>
        <Text style={styles.rateText}>
          {isRated ? 'Rated' : 'Rate This Driver'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TripRow = ({text, time, location}) => {
  return (
    <View style={[styles.flexContainer, {paddingTop: 15}]}>
      <View style={{flex: 3}}>
        <Text style={styles.label}>{text} Time</Text>
        <Text style={[styles.greyText, {fontSize: 12}]}>{time}</Text>
      </View>
      <View style={{flex: 1}}>
        <Ionicons name={'location-sharp'} color={'#000'} size={20} />
      </View>
      <View style={{flex: 3}}>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const MoneyRow = ({text, value, textStyle, valueStyle}) => {
  return (
    <View style={[styles.flexContainer, {marginTop: 10}]}>
      <Text style={[styles.label, textStyle]}>{text}</Text>
      <Text style={[styles.greyText, valueStyle]}>${value.toFixed(2)}</Text>
    </View>
  );
};

const TripDetails = ({route}) => {
  const [tripData, setTripData] = useState({});
  const {activityId} = route.params;

  useEffect(() => {
    const fetchData = activityId => {
      setTripData(dummyTripData);
    };

    fetchData();
  }, [tripData]);

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Entypo name={'chevron-left'} color="#000" size={30} />
            <Text style={styles.title}>Trip Details</Text>
          </View>

          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            color={'#B6B6B6'}
            size={scale(25)}
          />
        </View>

        <View style={styles.board}>
          {/*brief*/}
          <View style={styles.separator}>
            <Text style={styles.date}>{tripData.date}</Text>
            <View style={styles.flexContainer}>
              <Text style={styles.greyText}>
                Your trip with {tripData.driverFirstName}
              </Text>
              <RateBtn isRated={tripData.isRated} />
            </View>
          </View>

          {/*time and location info*/}
          <View style={styles.separator}>
            <TripRow
              text={'Pick Up'}
              time={tripData.pickupTime}
              location={tripData.pickupLocation}
            />
            <TripRow
              text={'Drop off'}
              time={tripData.dropOffTime}
              location={tripData.dropOffLocation}
            />
          </View>

          {/*money info*/}
          <View style={styles.separator}>
            <MoneyRow text={'Trip Fare'} value={tripData.tripFare} />
            <MoneyRow text={'Tip'} value={tripData.tip} />
            <MoneyRow
              text={'Total Cost'}
              value={tripData.tripFare + tripData.tip}
              textStyle={{fontWeight: '700', fontSize: 18}}
              valueStyle={{fontWeight: '500', fontSize: 18, color: '#000'}}
            />
          </View>

          {/*payment info*/}
          <View style={{marginTop: 10}}>
            <Text style={styles.label}>payments</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripDetails;
