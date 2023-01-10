import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { memo, useState} from 'react'
import { COLORS, STYLES, ICONS, SIZES, KEY_TOKEN, KEY_SCREEN } from '../../../common/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderList, addOrderItem } from '../../../redux/ReduxSlice'
import { useEffect } from 'react'
import { saveStorage } from '../../../common/LocalStorage'
import Utils from '../../../../app/Utils'
const Detail = () => {
    const [chooseSize, setChooseSize] = useState(0)
    const [chooseColor, setChooseColor] = useState(0)
    const dispatch = useDispatch()
    const dataShoesDetail = useSelector((state) => state.redux.detailShoesData)
    const orderItemShoes = useSelector((state) => state.redux.orderItem)
    const orderListShoes = useSelector((state) => state.redux.orderList)
    const category = dataShoesDetail?.categories[0]?.category
    const sizes = dataShoesDetail.size
    const colors = [COLORS.dark, COLORS.greylight]
    useEffect(() => {
        if (Object.keys(orderItemShoes).length === 0) {
        } else {
            const idOrderList = orderListShoes.map((item) => item.id)
            let idOrderItem = `${dataShoesDetail.id}${sizes[chooseSize]}${colors[chooseColor]}`
            if (idOrderList.includes(idOrderItem)) {
                const newArr = orderListShoes.map((item) => {
                    if (item.id === idOrderItem) {
                        return {
                            ...item,
                            quantity: item.quantity += 1
                        }
                    } else {
                        return item
                    }
                })
                dispatch(addOrderList([...newArr]))
                dispatch(addOrderItem({}))
            } else {
                dispatch(addOrderList([...orderListShoes, orderItemShoes]))
                dispatch(addOrderItem({}))
            }
        }
    }, [orderItemShoes])
    useEffect(() => {
        saveStorage(KEY_TOKEN.myCart, orderListShoes)
    }, [orderListShoes])
    const handleAddBag = (data) => {
        dispatch(addOrderItem(data))
        Utils.showToast('Đã thêm vào giỏ',ICONS.iconCheck,800,'normal', () => Utils.goback());
    }
    // console.log('detail')
    return (
        <View style={{ backgroundColor: COLORS.white, borderTopRightRadius: 30, borderTopLeftRadius: 30, padding: 15, ...STYLES.shadow }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: COLORS.dark }}>{dataShoesDetail.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ width: SIZES.width(30), marginRight: 15, textTransform: 'capitalize' }}>{category + '\'s Running'}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image style={{ width: 12, height: 12 }} source={ICONS.iconStar} />
                    <Image style={{ width: 12, height: 12 }} source={ICONS.iconStar} />
                    <Image style={{ width: 12, height: 12 }} source={ICONS.iconStar} />
                    <Image style={{ width: 12, height: 12 }} source={ICONS.iconStar} />
                    <Image style={{ width: 12, height: 12 }} source={ICONS.iconHalfStar} />
                    <Text>10</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: '500', color: COLORS.dark }}>{`$${dataShoesDetail.price}`}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500', marginRight: 10 }}>Colors</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {colors.map((color, index) => {
                            return (
                                <TouchableOpacity
                                    key={color}
                                    onPress={() => { setChooseColor(index) }}
                                    style={{ borderColor: index === chooseColor ? COLORS.darkLight : COLORS.white, borderWidth: 1.3, borderRadius: 30, padding: 2, marginLeft: 10 }}>
                                    <View style={{ width: 18, height: 18, backgroundColor: color, borderRadius: 30, margin: 2 }} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Select a size</Text>
                <Text style={{ paddingLeft: 10 }}>View size guide</Text>
            </View>
            <ScrollView
                horizontal={true}
                style={{ paddingVertical: 5 }}>
                {sizes.map((size, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setChooseSize(index)}
                            style={[styles.sizeShoes, index === chooseSize ? styles.sizeActive : '']}>
                            <Text style={{ color: index === chooseSize ? COLORS.white : COLORS.dark }}>{size}</Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
            <View style={{ borderWidth: 0.7, borderColor: COLORS.bcground, marginVertical: 15 }} />
            <Text style={{ fontSize: 20, fontWeight: '900', color: COLORS.dark, marginBottom: 15 }}>{dataShoesDetail.shortDescription.trim()}</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 15 }}>{dataShoesDetail.description.trim()}</Text>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    const dataItem = {
                        id: `${dataShoesDetail.id}${sizes[chooseSize]}${colors[chooseColor]}`,
                        productId:`${dataShoesDetail.id}`,
                        idShoes: dataShoesDetail.id,
                        image: dataShoesDetail.image,
                        name: dataShoesDetail.name,
                        size: sizes[chooseSize],
                        color: colors[chooseColor],
                        price: dataShoesDetail.price,
                        quantity: 1
                    }
                    handleAddBag(dataItem)
                }}
                style={{ backgroundColor: COLORS.dark, padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                <Text style={{ fontSize: 18, color: COLORS.white, fontWeight: '600' }}>Add to bag</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    sizeShoes: { borderColor: COLORS.dark, borderWidth: 1.5, width: 40, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
    sizeActive: { backgroundColor: COLORS.dark },
})
export default memo(Detail)
