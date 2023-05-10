import React, {useEffect, useReducer, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import OrderStatusBar from '../../../components/OrderStatusBar';
import orderStatus from '../../../constants/orderStatus';
import {dummyActivityData} from '../../../constants/data/dummyActivityData';
import ActivityBoardByDate from '../../../components/ActivityBoard';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ActivityBoardWithBottom from '../../../components/ActivityBoardWithBottom';

const Activity = () => {
  const [activityStatus, setActivityStatus] = useState(orderStatus.PAST);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activityData, setActivityData] = useState([]);

//   const tabBarHeight = useBottomTabBarHeight();
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsRefreshing(true);
    setActivityData(dummyActivityData);
    setTimeout(function () {
      // your code here
    }, 2000);
    setIsRefreshing(false);
  };

  const loadMore = () => {
    setIsRefreshing(true);
    setPage(page + 1);
    console.log('load more data');
    setTimeout(function () {
      // your code here
    }, 2000);

    setIsRefreshing(false);
  };

  const renderFooter = () => {
    if (isRefreshing) {
      return null;
    }

    return (
      <View>
        <FontAwesome name={'spinner'} size={16} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{...styles.root, marginBottom: 200}}>
        <View style={styles.header}>
          <Text style={styles.title}>Suggested Riders</Text>
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            color={'#B6B6B6'}
            size={scale(25)}
          />
          
        </View>
        <FlatList
          data={activityData}
          renderItem={({item}) => (
            <ActivityBoardWithBottom
              activities={item.activities}
            />
          )}
          key={item => item.date}
          showsVerticalScrollIndicator={false}
          onRefresh={fetchData}
          refreshing={isRefreshing}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default Activity;
