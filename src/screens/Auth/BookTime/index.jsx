import React, {useEffect, useReducer, useState} from 'react';
import {FlatList, SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import orderStatus from '../../../constants/orderStatus';
import {dummyTripData} from '../../../constants/data/dummyTripData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TripInfo from '../../../components/BookTimeInfo';
import {scale} from 'react-native-size-matters';
import LongBottom from '../../../components/LongButton';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const BookTime = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [activityData, setActivityData] = useState([]);
    const [page, setPage] = useState(0);
    const cancel_logo = require('../../../assets/images/book_time/cancel.png');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setIsRefreshing(true);
        setActivityData(dummyTripData);
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
    
    return (
        <SafeAreaView>
            <View style={styles.root}>

                <View style={styles.header}>
                    <View style={{flex:1}}>
                        <Ionicons
                            name={'arrow-back'}
                            size={30}
                            onPress={() => navigation.navigate()}
                        />
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.headText}>Schedule your ride</Text>
                    </View>
                </View>

                <FlatList
                    data={activityData}
                    renderItem={({item}) => (
                        <TripInfo
                        pickupTime={item.pickupTime}
                        tripFare={item.tripFare}
                        id={item.id}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    onRefresh={fetchData}
                    refreshing={isRefreshing}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.1}
                    style={styles.fList}                
                />
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Image source={cancel_logo} style={styles.img}/>
                    </TouchableOpacity>
                    <LongBottom otherStyle={styles.btn} text={'Book WERIDE'} onPress={() => {}} />
                </View>

            </View>
        </SafeAreaView>
    );
};

export default BookTime;
