import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActivityBoardByDate = ({date, activities}) => {
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

  const TripRow = ({location, time}) => {
    return (
      <View style={styles.rowContainer}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons name={'location-sharp'} color={'#000'} size={20} />
          <Text style={styles.address}>{location}</Text>
        </View>
        <Text>{time}</Text>
      </View>
    );
  };

  const ActivityBoard = ({activity}) => {
    return (
      <View style={styles.activityContainer}>
        <UserInfo data={activity} />
        <View style={styles.tripInfo}>
          <TripRow
            location={activity.pickupLocation}
            time={activity.pickupTime}
          />
          <TripRow
            location={activity.dropOffLocation}
            time={activity.dropOffTime}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.date}>{date}</Text>
      {activities.map(x => {
        return <ActivityBoard activity={x} key={x.id} />;
      })}
    </View>
  );
};

export default ActivityBoardByDate;
