import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { memo,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StaggeredList from '@mindinventory/react-native-stagger-view'
import { ICONS, COLORS, STYLES, SIZES, KEY_SCREEN } from '../../../common/Constant'
import { useNavigation } from '@react-navigation/native'
import { getProductById, getProductFavorite, likeProduct, unlikeProduct } from '../../../redux/ReduxThunk'

export default memo(function ListShoes() {
  const shoesData = useSelector((state) => state.redux.shoesData)
  const idProductFavorite = useSelector((state) => state.redux.idProductFavorite)
  const like = useSelector((state) => state.redux.isLike)
  const unlike = useSelector((state) => state.redux.isUnLike)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const handleGoDetailShoes = (id) => {
    dispatch(getProductById(id))
    navigation.navigate(KEY_SCREEN.detailShoes)
  }
  useEffect(() => {
    dispatch(getProductFavorite())
  }, [like, unlike])
  const pressLike = (id) => {
    const isLike = idProductFavorite.includes(id)
    if (isLike) {
      dispatch(unlikeProduct(id))
    } else {
      dispatch(likeProduct(id))
    }
  }
  const renderItemShoes = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => { handleGoDetailShoes(item.id) }}
        style={{ backgroundColor: 'white', width: '90%', padding: 10, borderRadius: 20, marginVertical: 10, marginHorizontal: 10 }}>
        <TouchableOpacity
          onPress={() => {pressLike(item.id)}}
          style={{ width: SIZES.width(8) }}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              marginTop: 5,
              tintColor: idProductFavorite.includes(item.id) ? COLORS.redLike :COLORS.greylight,
            }}
            source={ICONS.icFavorite} />
        </TouchableOpacity>
        <Image
          style={{
            width: 130,
            height: 100,
          }}
          source={{
            uri: item.image
          }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 3, flex: 1 }}>{item.name}</Text>
        <Text style={{ fontSize: 16, fontWeight: '500', paddingBottom: 5 }}>$ {item.price}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <StaggeredList
        animationType={'FADE_IN_FAST'}
        showsVerticalScrollIndicator={false}
        renderItem={renderItemShoes}
        data={shoesData} />
    </View>
  )
})