import React, {useState} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';

const UserProfile = (props) => {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.avatar}
        source={require('../assets/icons/user.png')}
      />
      <View style={styles.info}>
        <Text style={styles.infoText}>Евгений Онегин</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: 'row',
  },
  avatar: {
    // height: '40%',
    // width: '40%',
    height: 150,
    width: 150,
  },
  info: {
    padding: 15,
  },
  infoText: {
    ...fonts.largeText,
  },
});

export default UserProfile;
