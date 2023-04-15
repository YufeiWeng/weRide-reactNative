import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import style from './style';

const RoleContainer = ({pictureURL, role}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[style.container, isSelected && style.selectedContainer]}>
      <View style={style.imageContainer}>
        <Image source={pictureURL} style={style.image} />
        {isSelected && (
          <View style={style.swooshContainer}>
            <View style={style.swoosh} />
          </View>
        )}
      </View>
      <Text style={style.title}>{role}</Text>
    </TouchableOpacity>
  );
};

export default RoleContainer;
