import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Post from '../../components/Post'

import Feed from '../../../assets/data/feed'


const SearchResultsScreen = (props) => {
    return (
        <View>
            <FlatList
                data={Feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    )
}

export default SearchResultsScreen
