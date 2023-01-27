import { View, Text } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import ListShoes from './components/ListShoes'

const SearchShoes = () => {
    console.log('render Search')
    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(235,234,239)' }}>
            <Header />
            <Search />
            <ListShoes />
        </View>
    )
}

export default SearchShoes