/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { StackNavigator, TabNavigator,DrawerNavigator } from 'react-navigation';

import screen1 from './app/containers/screen1/screen1'
import screen2 from './app/containers/screen2/screen2'

const StacksOverTabs = StackNavigator({
  Screen1: {
    screen: screen1,
  },
  Screen2: {
    screen: screen2,
  },
}
)

class App extends React.Component{
  render(){
    return(
      <Fragment>
      <SafeAreaView style={{ flex:0, backgroundColor: '#FFF395' }} />
      <SafeAreaView style={{ flex:1, backgroundColor: '#FFF395' }}>
      <StacksOverTabs/>
      </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;

