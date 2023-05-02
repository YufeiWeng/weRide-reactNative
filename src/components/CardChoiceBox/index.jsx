import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CardChoice(props) {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={styles.text}>{props.text}</Text>
        <View style={styles.image}>
          <Image source={props.image} style={styles.imageIcon} />
        </View>
      </View>
    </View>
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
    width: 24,
    height: 24,
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
