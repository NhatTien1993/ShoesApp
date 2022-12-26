import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect,memo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, getProductByCategory } from '../../../redux/ReduxThunk'
import { setCategorySelected,setRelateShoes } from '../../../redux/ReduxSlice'


export default memo(function Menu() {
    const categoryData = useSelector((state) => state.redux.categoryData)
    const categorySelected = useSelector((state) => state.redux.categorySelected)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
        dispatch(getProductByCategory())
    }, [])
    // console.log(categoryData)
    const _setCategory = (id) => {
        dispatch(setCategorySelected(id))
        dispatch(getProductByCategory(id))
        console.log()
    }
    const renderItemCategory = ({ item }) => {
        return <TouchableOpacity
            onPress={() => _setCategory(item.id)}
            style={{ padding: 5, marginHorizontal: 10 }}>
            <Text style={{ color: categorySelected == item.id ? 'white' : '#666', fontSize: 20, fontWeight: 'bold',textTransform:'capitalize' }}>{item.category+ ' SHOES'}</Text>
        </TouchableOpacity>
    }
    console.log('menu')
    return (
        <View>
            <FlatList
                horizontal={true}
                renderItem={renderItemCategory}
                data={categoryData} />
        </View>
    )
})