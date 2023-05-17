import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
const PendingPart = ({data}) => {
  // const imageUrl = require(data.imageUrl);
  return (
    <View style={styles.userInfo}>
      <View style={styles.flexContainer1}>
        {/*<Image source={imageUrl} style={styles.avatar} />*/}

        <View style={styles.pendingView}>
          <MaterialCommunityIcons size={25} name={'clock-alert'} color={'#9E0000'} />
          <Text style={styles.pendingText}>Pending Trip</Text>
        </View>

        <View style={styles.cancelRideView}>
          <Text style={styles.cancelRide}>Cancel Ride</Text>
        </View>
      </View>

      <View style={styles.flexContainer}>
        <View>
          <Text style={styles.cost}>Cost</Text>
          <Text style={styles.princeOrTime}>${data.cost}</Text>
        </View>
        <View style={styles.lookUp}>
          <AntDesign name={'right'} />
        </View>
      </View>
    </View>
  );
};
const TripRow1 = ({location, time}) => {
  return (
    <View style={styles.rowContainer1}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Ionicons name={'location-sharp'} color={'#000'} size={20} />
        <Text style={styles.address}>{location}</Text>
      </View>
      <Text>{time}</Text>
    </View>
  );
};

const PendingBox = ({activity}) => {
  const navigation = useNavigation();
  // const activity = activity.activities
  console.log(activity);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('TripDetails', {activityId: activity.id})
      }>
      <View style={styles.activityContainer}>
        <PendingPart data={activity} />
        <View style={styles.tripInfo}>
          <TripRow1
            location={activity.pickupLocation}
            time={activity.pickupTime}
          />
          <TripRow1
            location={activity.dropOffLocation}
            time={activity.dropOffTime}
          />
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

export default PendingBox;
