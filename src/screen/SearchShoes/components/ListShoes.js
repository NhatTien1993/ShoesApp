import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, memo } from 'react'
import StaggeredList from '@mindinventory/react-native-stagger-view'
import { useDispatch, useSelector } from 'react-redux'
import { ICONS, SIZES, KEY_SCREEN, COLORS } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
import { getProduct, getProductById, getProductFavorite, likeProduct, unlikeProduct } from '../../../redux/ReduxThunk'

const ListShoes = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.redux.search)
    const idProductFavorite = useSelector((state) => state.redux.idProductFavorite)
    const accessToken = useSelector((state) => state.redux.accessToken)
    const allShoesData = useSelector((state) => state.redux.allShoes)
    const isLoadding = useSelector((state) => state.redux.isLoadding)
    const like = useSelector((state) => state.redux.isLike)
    const unlike = useSelector((state) => state.redux.isUnLike)
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    const handleGoDetailShoes = (id) => {
        dispatch(getProductById(id))
        navigation.navigate(KEY_SCREEN.detailShoes)
    }
    useEffect(() => {
        dispatch(getProductFavorite(accessToken))
    }, [like, unlike])
    const pressLike = (id) => {
        const isLike = idProductFavorite.includes(id)
        if (isLike) {
            dispatch(unlikeProduct({ id, accessToken }))
        } else {
            dispatch(likeProduct({ id, accessToken }))
        }
    }
    const ItemShoes = ({ item }) => {
        return (
            <TouchableOpacity
                disabled={isLoadding}
                onPress={() => { handleGoDetailShoes(item.id) }}
                style={{ backgroundColor: 'white', width: '90%', padding: 10, borderRadius: 20, marginVertical: 10, marginHorizontal: 10 }}>
                <TouchableOpacity
                    style={{ width: SIZES.width(8) }}
                    onPress={() => {
                        pressLike(item.id)
                    }}>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            marginTop: 5,
                            tintColor: idProductFavorite.includes(item.id) ? COLORS.redLike : COLORS.greylight,
                        }}
                        source={ICONS.icFavorite} />
                </TouchableOpacity>

                <Image

                    style={{
                        width: SIZES.width(35),
                        minHeight: SIZES.height(13),
                        alignSelf: 'center'
                    }}
                    source={{
                        uri: item.image
                    }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 3, flex: 1, color: COLORS.secondary }}>{item.name}</Text>
                <Text style={{ color: '#888', paddingBottom: 3 }}>Style shoes</Text>
                <Text style={{ fontSize: 16, fontWeight: '500', paddingBottom: 5, color: COLORS.primary }}>$ {item.price}</Text>
            </TouchableOpacity>
        )
    }

    const shoesData = () => {
        let newdata = []
        if (searchValue) {
            allShoesData.map((item) => {
                const result = item.name.toLowerCase()
                if (result.includes(searchValue.toLowerCase().trim())) {
                    return newdata.push(item)
                }
            })
        } else {
            newdata = [...allShoesData]
        }
        return newdata
    }
    // console.log('render SearchPage')
    return (
        <View style={{ marginHorizontal: 10, flex: 1, }}>
            {/* <FlatList
                data={data}
                renderItem={ItemShoes}
                numColumns={2} /> */}
            <StaggeredList
                animationType={'FADE_IN_FAST'}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ItemShoes item={item} />}
                data={shoesData()} />
        </View>
    )
}

export default memo(ListShoes)

const styles = StyleSheet.create({})