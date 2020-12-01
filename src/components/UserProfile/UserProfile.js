import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const UserProfile = ({user}) => {
  return (
    <View style={styles.profile}>
      <View style={styles.row}>
        <View style={styles.userAvatar}>
          <Icon name="user" color={colors.white} size={115} />
        </View>
        <TouchableOpacity style={styles.settings}>
          <Icon name="settings" color={colors.white} size={35} />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Здравствуйте, {user.name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    paddingTop: 20,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userAvatar: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  avatar: {
    height: 115,
    width: 115,
    borderRadius: 115,
  },
  settings: {
    position: 'absolute',
    alignSelf: 'center',
    right: '20%',
  },
  heading: {
    ...fonts.heading,
    fontWeight: '700',
    color: colors.white,
  },
});

export default UserProfile;
