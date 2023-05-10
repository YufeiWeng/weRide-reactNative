import React from 'react';
import {View, Text, Image, StyleSheet,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function CardChoice({text,imageurl}) {
    const navigation = useNavigation();
    return (
      <Pressable onPress={() => navigation.navigate('CardInfo')}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.image}>
              <Image source={imageurl} style={styles.imageIcon} />
            </View>
          </View>
        </View>
      </Pressable>
    );
  }
export default CardChoice;

const styles = StyleSheet.create({
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginBottom: 15, // add margin to the bottom
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#158EFF',
    width: 342,
    height: 64,
  },
  text: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
    Weight: 300,
    color: 'grey',
    font: 'Poppins',
  },
  image: {
    width: 30,
    height: 30,
    background: '#4CAF50',
    order: 1,
    flexGrow: 0,
  },
  imageIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
