import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Animated
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export const Home = ({ navigation }) => {
  const animation = React.useRef(new Animated.Value(600))

  fadeIn = () => {
    Animated.timing(animation.current, {
      toValue: 0,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Detox Synchronisation</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Button onPress={() => navigation.navigate('Modal')} title={'Open Modal'} testID={'modal-button'} />
            <Button onPress={() => fadeIn()} title={'Show Text'} testID={'show-text'} />
            <Animated.View style={{ transform: [{ translateY: animation.current }] }}>
              <Text style={styles.sectionDescription} testID={'test-text'}>
                Read the docs to discover what to do next:
              </Text>
            </Animated.View>
          </View>
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});
