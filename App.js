/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/Home'
import SearchResult from './src/screens/SearchResults'
import DestinationSearchScreen from './src/screens/DestinationSearch'
import GuestsScreen from './src/screens/Guests'
import Post from './src/components/Post'

import Router from './src/navigation/Router';




const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      {/* <HomeScreen /> */}
      {/* <Post post={post1} /> */}
      {/* <SearchResult /> */}
      {/* <DestinationSearchScreen /> */}
      {/* <GuestsScreen /> */}
      <Router />

    </>
  );
};



export default App;
