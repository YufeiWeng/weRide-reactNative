import React, {useEffect, useRef} from 'react';
import orderStatus from '../../constants/orderStatus';
import {Animated, Pressable, View, Text} from 'react-native';
import styles from './styles';

const Block = ({selected, text, setActivity}) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: selected === text ? 1 : 0.5,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [opacity, selected, text]);

  return (
    <Pressable
      onPress={() => setActivity(text)}
      style={[styles.block, selected === text && styles.selectedBlock]}>
      <Animated.View style={{opacity}}>
        <Text
          style={
            selected === text ? styles.selectedText : styles.unselectedText
          }>
          {text}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const OrderStatusBar = ({selected, setActivity}) => {
  return (
    <View style={styles.root}>
      {Object.keys(orderStatus).map(status => {
        return (
          <Block
            key={status}
            selected={selected}
            text={orderStatus[status]}
            setActivity={setActivity}
          />
        );
      })}
    </View>
  );
};

export default OrderStatusBar;
