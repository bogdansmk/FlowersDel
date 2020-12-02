import React, {useLayoutEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import AddToFavButton from '../components/Catalog/AddToFavButton';
import AddToCartButton from '../components/Catalog/AddToCartButton';
import FocusAwareStatusBar from '../components/StatusBar/FocusAwareStatusBar';
import AppButton from '../components/AppButton/AppButton';
import Slider from '../components/Slider/Slider';

const CatalogItemScreen = (props) => {
  const item = props.route.params.item;

  const itemImages = [
    '../assets/images/img6.jpg',
    '../assets/images/img6.jpg',
    '../assets/images/img6.jpg',
    '../assets/images/img6.jpg',
  ];

  let [stepperVal, setStepperVal] = useState(1);

  const increaseVal = () => setStepperVal(stepperVal + 1);
  const decreaseVal = () =>
    stepperVal ? setStepperVal(stepperVal - 1) : false;

  const formatVotes = (votes) => {
    let n = votes % 10;
    let str = n > 4 || n === 0 ? 'голосов' : 'голоса';
    return votes + ' ' + (n === 1 ? 'голос' : str);
  };

  const imageWidth = Dimensions.get('window').width;
  const headerHeight = imageWidth * 0.9;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <AddToFavButton item={item} />,
    });
  }, [props.navigation, item]);

  return (
    <ScrollView style={styles.screen}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{height: headerHeight}}>
        <Slider images={itemImages} width={imageWidth} />
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>{item.name}</Text>
        <View>
          <Text style={styles.rating}>
            <Icon name="star" size={15} color={colors.yellow} /> 4.5
            <Text style={styles.ratingCount}> - {formatVotes(124)}</Text>
          </Text>
        </View>
        <Text style={styles.description}>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты. Вдали от всех живут они в буквенных домах на берегу
          Семантика большого языкового океана.
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.stepper}>
            <AppButton
              style={styles.stepperButton}
              size={22}
              text="–"
              onPress={decreaseVal}
            />
            <Text style={styles.stepperCount}>{stepperVal}</Text>
            <AppButton
              style={styles.stepperButton}
              size={22}
              text="+"
              onPress={increaseVal}
            />
          </View>
        </View>
        <AddToCartButton stepperVal={stepperVal} item={item} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkWhite,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  body: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: -30,
    backgroundColor: colors.darkWhite,
    elevation: 60,
  },
  heading: {
    ...fonts.heading,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 5,
  },
  rating: {
    color: colors.yellow,
    fontWeight: '700',
  },
  ratingCount: {
    color: colors.textColor + '77',
    fontWeight: '400',
  },
  description: {
    ...fonts.text,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  price: {
    ...fonts.heading,
    fontWeight: '700',
    color: colors.green,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    height: 40,
  },
  stepperButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  stepperCount: {
    ...fonts.smallHeading,
    fontWeight: '700',
  },
});

export default CatalogItemScreen;
