import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../res/colors';
import UserProfile from '../components/UserProfile/UserProfile';
import LastOrders from '../components/LastOrders/LastOrders';
import {useSelector} from 'react-redux';

const ProfileScreen = (props) => {
  const {name, orders} = useSelector((state) => state.user);

  return (
    <View style={styles.profile}>
      <UserProfile user={{name}} />
      <LastOrders orders={orders} />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: colors.green,
  },
});

export default ProfileScreen;
