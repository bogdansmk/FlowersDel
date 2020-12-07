import AppButton from '../AppButton/AppButton';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import fonts from '../../res/fonts';

const Stepper = ({value}) => {
  let [stepperVal, setStepperVal] = useState(value || 1);

  const increaseVal = () => setStepperVal(stepperVal + 1);
  const decreaseVal = () =>
    stepperVal ? setStepperVal(stepperVal - 1) : false;

  return (
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
  );
};

const styles = StyleSheet.create({
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

export default Stepper;
