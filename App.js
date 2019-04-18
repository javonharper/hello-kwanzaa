import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import FAQScreen from './src/FAQScreen';
import PronunciationModal from './src/PronunciationModal';

EStyleSheet.build({});

const MainStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  FAQ: { screen: FAQScreen }
});

const RootStack = createStackNavigator(
  {
    Main: { screen: MainStack },
    PronunciationModal: { screen: PronunciationModal }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(RootStack);

const App = () => (
  <View style={{ flex: 1 }}>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    <AppNavigator />
  </View>
);

export default App;
