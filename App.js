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

import Post from './src/components/Post'






const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResult /> */}
        <DestinationSearchScreen />
      </SafeAreaView>
    </>
  );
};



export default App;
