import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CardInputBox = ({placeholder, width}) => {
  return (
    <View style={[styles.boxContainer]}>
      <View style={[styles.box, {width}]}>
        <TextInput placeholder={placeholder} style={styles.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#158EFF',
    height: 64,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '300',
    color: 'grey',
    fontFamily: 'Poppins',
  },
});

export default CardInputBox;
