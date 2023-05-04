import React from 'react';
import {Text, View, SafeAreaView, ImageBackground} from 'react-native';
import styles from './style';
import LongBottom from '../../../components/LongButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import SwitchSelector from "react-native-switch-selector";

const DateRow = () => {
    return(
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 60,
        }}>
        <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <Text>date</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <Text>date</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <Text>date</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <Text>date</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <Text>date</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <Text>date</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <Text>date</Text>
        </View>
    </View>
    )
}

const TimeSelection = () => {
  const gray_rec = require('../../../assets/images/time_selection/grayrec.png');
  const options = [
    { label: "AM", value: "1" },
    { label: "PM", value: "2" },
   
  ];
  return (
    <SafeAreaView>
        <View style={styles.root}>
            <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                    <Ionicons
                        name={'arrow-back'}
                        size={30}
                        onPress={() => navigation.navigate()}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.headText}>Leaving Time</Text>
                </View>
            </View>
        
        
        <View style={styles.calendar}>
            <View style={{marginBottom: 20}}>
                <Text>June 2020</Text>
            </View>
            <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 25
                }}>
                <View style={{flex: 1, flexDirection: 'row', height: 50}}>
                    <Text style={{color: '#808080'}}>SUN</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', height: 50}}>
                    <Text style={{color: '#808080'}}>MON</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', height: 50}}>
                    <Text style={{color: '#808080'}}>TUE</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', height: 50}}>
                    <Text style={{color: '#808080'}}>WED</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', height: 50}}>
                    <Text style={{color: '#808080'}}>THU</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', height: 50}}>
                    <Text style={{color: '#808080'}}>FRI</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', height: 50}}>
                    <Text style={{color: '#808080'}}>SAT</Text>
                </View>
            </View>
            <DateRow></DateRow>
            <DateRow></DateRow>
            <DateRow></DateRow>
            <DateRow></DateRow>
            <DateRow></DateRow>
            <View style={{flexDirection:"row", marginTop: -20}}>

                <View style={{flex:1}}>
                    <Text style={{fontSize: 20, fontWeight:500}}>Time</Text>
                </View>

                <ImageBackground 
                source={gray_rec} 
                style={{flex: 1, left: width * 0.1, height: 30, width: 60}}
                imageStyle={{ borderRadius: 6}}>
                    <Text style={{fontSize: 21, fontWeight:500, left: 7}}>11:30</Text>
                </ImageBackground>

                <SwitchSelector
                style={{flex: 1}}
                borderRadius={10}
                textColor={'#000000'}
                selectedColor={'#e5e5e6'}
                buttonColor={'#708090'}
                height= {30}
                options={options}
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />
            </View>
        </View>

        <LongBottom otherStyle={styles.btn} text={'Submit'} onPress={() => {}} />
        
        </View>
        
    </SafeAreaView>
  );
};

export default TimeSelection;
