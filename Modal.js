import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Animated
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export const Modal = ({ navigation }) => {
  const animation = React.useRef(new Animated.Value(0))

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animation.current, {
        toValue: 100,
        useNativeDriver: true,
        duration: 4000
      })
    ).start()
  })

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Modal Screen</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Button onPress={() => navigation.goBack()} title={'Close Modal'} testID={'close-button'} />
          </View>
          <Animated.View
            testID={'cube'}
            style={[styles.cube, {
              transform: [{
                rotate: animation.current.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, 360]
                })
              }]
            }]} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  cube: {
    width: 40,
    height: 40,
    backgroundColor: 'pink'
  }
});
