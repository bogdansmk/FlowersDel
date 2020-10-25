import React from 'react';
import {View, Text, Image} from 'react-native';

export const NavbarItem = (props) => {
  return (
    <View>
      {/*<Text>{props.name}</Text>*/}
      <Image source={props.icon} />
    </View>
  );
};
