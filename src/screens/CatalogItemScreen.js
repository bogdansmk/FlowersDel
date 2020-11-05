import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const CatalogItemScreen = (props) => {
  let [stepperVal, setStepperVal] = useState(1);

  const increaseVal = () => setStepperVal(stepperVal + 1);
  const decreaseVal = () =>
    stepperVal ? setStepperVal(stepperVal - 1) : false;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.img}
          source={require('../assets/images/img6.jpg')}
        />
        <Text style={styles.price}>1231</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>Название 1</Text>
        <View>
          <Text style={styles.rating}>
            <Icon name="star" size={15} color={colors.yellow} /> 4.5
            <Text style={styles.ratingCount}> - 124</Text>
          </Text>
        </View>
        <Text style={styles.description}>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты. Вдали от всех живут они в буквенных домах на берегу
          Семантика большого языкового океана.
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>249 грн.</Text>
          <View style={styles.stepper}>
            <TouchableOpacity onPress={decreaseVal}>
              <Text style={styles.stepperDecr}>-</Text>
            </TouchableOpacity>
            <Text style={styles.stepperCount}>{stepperVal}</Text>
            <TouchableOpacity onPress={increaseVal}>
              <Text style={styles.stepperIncr}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.input,
            styles.button,
            !stepperVal ? {opacity: 0.4} : null,
          ]}
          disabled={!stepperVal}>
          <Text style={styles.buttonText}>Добавить в корзину</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkWhite,
  },
  header: {
    flex: 1,
    height: 300,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  body: {
    flex: 1,
    // alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: -30,
    backgroundColor: colors.darkWhite,
    elevation: 120,
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
    // backgroundColor: colors.pale,
  },
  stepperIncr: {
    width: 40,
    height: 40,
    ...fonts.smallHeading,
    lineHeight: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.textColor,
  },
  stepperDecr: {
    width: 40,
    height: 40,
    ...fonts.smallHeading,
    lineHeight: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.textColor,
  },
  stepperCount: {
    ...fonts.smallHeading,
    fontWeight: '700',
  },
  input: {
    height: 45,
    width: '70%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    marginBottom: 12,
    ...fonts.text,
    color: colors.headingColor,
    //11
  },
  button: {
    // width: 120,
    justifyContent: 'center',
  },
  buttonText: {...fonts.smallHeading},
});

export default CatalogItemScreen;
