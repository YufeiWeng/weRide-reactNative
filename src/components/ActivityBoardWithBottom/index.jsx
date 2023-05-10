import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../LongButton';
const UserInfo = ({data}) => {
  // const imageUrl = require(data.imageUrl);
  return (
    <View style={styles.userInfo}>
      <View style={styles.flexContainer}>
        {/*<Image source={imageUrl} style={styles.avatar} />*/}

        <Image
          source={require('../../assets/images/avatar-temp.png')}
          style={styles.avatar}
        />
        <View>
          <Text>{data.name}</Text>
          <Text>
            <MaterialIcons size={13} name={'star-rate'} color={'#FCBD2A'} />{' '}
            {data.rating}
          </Text>
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
const TripRow2 = ({location, time}) => {
    const navigation = useNavigation();
    return (
      <View style={styles.rowContainer2}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons name={'location-sharp'} color={'#000'} size={20} />
          <Text style={styles.address}>{location}</Text>
        </View>
        <View>
            <LongBottom
            onPress={() => {
                navigation.navigate('Home');
            }} //Todo verify login infos
            //   disabled={btnDisabled}
            text={'Login'}
            otherStyle={styles.btn}
            />
        </View>
        <Text>{time}</Text>
      </View>
      
    );
  };

const ActivityBoardWithBottom = (activity) => {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TripDetails', {activityId: activity.id})
        }>
        <View style={styles.activityContainer}>
          <UserInfo data={activity} />
          <View style={styles.tripInfo}>
            <TripRow1
              location={activity.pickupLocation}
              time={activity.pickupTime}
            />
            <TripRow2
              location={activity.dropOffLocation}
              time={activity.dropOffTime}
            />            
          </View>
          
        </View>
      </TouchableOpacity>
    );
  };

export default ActivityBoardWithBottom;