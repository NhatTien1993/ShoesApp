import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRelateShoes } from '../../../redux/ReduxSlice'
import { getProductById, getProductFavorite, likeProduct, unlikeProduct } from '../../../redux/ReduxThunk'
import { ICONS, COLORS, STYLES, SIZES, KEY_SCREEN } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

export default memo(function ListShoes() {
    const shoesData = useSelector((state) => state.redux.shoesData)
    const categorySelected = useSelector((state) => state.redux.categorySelected)
    const idProductFavorite = useSelector((state) => state.redux.idProductFavorite)
    const accessToken = useSelector((state) => state.redux.accessToken)
    const like = useSelector((state) => state.redux.isLike)
    const unlike = useSelector((state) => state.redux.isUnLike)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductById(1))      
    }, [])
    const getRelateShoes = (products) => {
        dispatch(setRelateShoes(products))
    }

    const handleGoDetailShoes = (id) => {
        dispatch(getProductById(id))
        navigation.navigate(KEY_SCREEN.detailShoes)
    }
    useEffect(() => {
        dispatch(getProductFavorite(accessToken))
    }, [like, unlike])
    const pressLike = (id) => {
        console.log(id)
        const isLike = idProductFavorite.includes(id)
        if (isLike) {
            dispatch(unlikeProduct({id,accessToken}))
        } else {
            dispatch(likeProduct({id,accessToken}))
        }
    }
    const renderItemShoes = ({ item }) => {
        return (

            <View
                onMoveShouldSetResponder={() => { getRelateShoes(item.relatedProducts) }}
                style={{
                    backgroundColor: 'white', width: SIZES.width(70), padding: 10, borderRadius: 15, marginVertical: 20, marginHorizontal: 15, ...STYLES.shadow
                }}>
                <TouchableOpacity activeOpacity={1} onPress={() => { handleGoDetailShoes(item.id) }}>
                    <TouchableOpacity
                        style={{ width: 50, alignSelf: 'flex-end', justifyContent: 'flex-start', padding: 20, marginTop: -10 }}
                        onPress={() => {pressLike(item.id)}} >
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: idProductFavorite.includes(item.id) ? COLORS.redLike :COLORS.greylight ,

                            }}
                            resizeMode='cover'
                            source={ICONS.icFavorite} />
                    </TouchableOpacity>
                    <Image
                        style={{
                            width: SIZES.width(55),
                            height: SIZES.height(15),
                            justifyContent: 'center',
                            alignSelf: 'center',
                            transform: [{ rotateY: '180deg' }]

                        }}
                        source={{
                            uri: item.image
                        }} />
                    <View style={{ minHeight: SIZES.height(11) }}>
                        <Text style={{ fontSize: 32, fontWeight: 'bold', paddingBottom: 3, color: COLORS.dark, paddingLeft: 10 }}>{item.name}</Text>
                    </View>
                    <Text style={{ fontSize: 16, paddingBottom: 3, textTransform: 'capitalize', paddingLeft: 10 }}>{(categorySelected + '\'s Running')}</Text>
                    <Text style={{ fontSize: 24, fontWeight: '500', paddingBottom: 5, paddingLeft: 10, color: COLORS.dark }}>${item.price}</Text>
                </TouchableOpacity>
            </View>

        )
    }
    // console.log('render HomePage')
    return (
        <View>
            <FlatList
                horizontal={true}
                renderItem={renderItemShoes}
                data={shoesData} />
        </View>
    )
})