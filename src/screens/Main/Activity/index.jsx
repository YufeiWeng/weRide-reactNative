import React, {useEffect, useReducer, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import OrderStatusBar from '../../../components/OrderStatusBar';
import orderStatus from '../../../constants/orderStatus';
import {activityData} from '../../../constants/data/activityData';
import ActivityBoardByDate from '../../../components/ActivityBoard';

const Activity = () => {
  const [activityStatus, setActivityStatus] = useState(orderStatus.PAST);
  // todo: the view is out of the screen
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.title}>Activity</Text>
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            color={'#B6B6B6'}
            size={scale(25)}
          />
        </View>

        <View style={styles.activityStatus}>
          <OrderStatusBar
            selected={activityStatus}
            setActivity={setActivityStatus}
          />
        </View>
        <FlatList
          data={activityData}
          renderItem={({item}) => (
            <ActivityBoardByDate
              date={item.date}
              activities={item.activities}
            />
          )}
          key={item => item.date}
          // onRefresh={fetchData}
          // refreshing={loading}
          // onEndReached={loadMore}
          // onEndReachedThreshold={0.5}
          // ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default Activity;
