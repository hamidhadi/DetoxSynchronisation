import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Home'
import { Modal } from './Modal'

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name='Home' component={Home} />
  </MainStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode={'modal'}>
        <RootStack.Screen name='Main' component={MainStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name='Modal' component={Modal} options={{ headerLeft: null }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
