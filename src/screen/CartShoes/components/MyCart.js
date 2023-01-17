import { View, Text, Image, TouchableOpacity, LogBox } from 'react-native'
import React, { memo } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { COLORS, ICONS, SIZES, STYLES } from '../../../common/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getStorage, saveStorage } from '../../../common/LocalStorage';
import { useState, useEffect } from 'react';
import { addOrderList, resetOrderStatus } from '../../../redux/ReduxSlice';
import Utils from '../../../../app/Utils';
import { getCheckoutProduct } from '../../../redux/ReduxThunk';

export default memo(function MyCart() {
    const [myCartData, setMyCartData] = useState([])
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const orderListShoes = useSelector((state) => state.redux.orderList)
    const orderStatus = useSelector((state) => state.redux.orderStatus)
    const profile = useSelector((state) => state.redux.userProfile)
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
        'Sending `onAnimatedValueUpdate` with no listeners registered'
    ]);
    const totalPay = myCartData.reduce((total, item) => {
        return total += (item.price * item.quantity)
    }, 0)
    useEffect(() => {
        profile.email && saveStorage(profile.email, orderListShoes)
        getOrderData()
    }, [orderListShoes])
    const getOrderData = async () => {
        const data = await getStorage(profile.email)
        if (data) {
            setMyCartData(data)
        }


    }
    useEffect(() => {
        if (orderStatus === 200) {
            Utils.showToast('Đặt hàng thành công', ICONS.iconCartCheckout, 1500, 'normal')
            dispatch(addOrderList([]))
            dispatch(resetOrderStatus(0))
        } else if (orderStatus !== 0) {
            Utils.showToast('Đặt hàng thất bại', ICONS.iconCartCheckout, 1500, 'error')
            dispatch(resetOrderStatus(0))
        }
    }, [orderStatus])

    const handleCheckout = () => {
        if (orderListShoes.length === 0) {
            Utils.showToast('Vui lòng thêm sản phẩm vào giỏ', ICONS.iconCartCheckout, 1500, 'warning')
        } else {
            dispatch(getCheckoutProduct({ myCartData, email: profile.email }))
        }
    }
    const handleDeleteOrderItem = (index) => {
        let newArr = [...orderListShoes]
        newArr.splice(index, 1)
        dispatch(addOrderList([...newArr]))
    }
    const handleIncreQuantity = (id) => {
        const updateOrderList = orderListShoes.map((item, index) => {
            if (index === id) {
                return {
                    ...item,
                    quantity: item.quantity += 1
                }
            } else {
                return item
            }

        })
        dispatch(addOrderList(updateOrderList))
    }
    const handleDecreQuantity = (id) => {
        let updateOrderList = orderListShoes.map((item, index) => {
            if (index === id) {
                if (item.quantity > 0) {
                    return {
                        ...item,
                        quantity: item.quantity -= 1
                    }
                } else {
                    return item
                }
            } else {
                return item
            }

        })
        const handleNo = () => {
            const newData = updateOrderList.map((item, index) => {
                if (item.quantity === 0) {
                    return {
                        ...item,
                        quantity: item.quantity = 1
                    }
                } else {
                    return item
                }
            })
            dispatch(addOrderList(newData))
        }
        const handleYes = () => {
            updateOrderList.splice(id, 1)
            dispatch(addOrderList(updateOrderList))
        }
        let isDeleteItem = updateOrderList.every((item) => item.quantity > 0)
        if (!isDeleteItem) {
            Utils.showAlert('Bạn chắc chắn muốn bỏ sản phẩm này?', handleYes, handleNo)
            // navigation.navigate(KEY_SCREEN.alertMessage, { indexItem: id, data: updateOrderList })
        } else {
            dispatch(addOrderList(updateOrderList))
        }
    }
    const ItemCart = ({ item, index }) => {
        return (
            <View
                key={item.id}
                style={{ backgroundColor: COLORS.white, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderRadius: 10, marginBottom: 20, height: 100, ...STYLES.shadow }}>
                <Image
                    style={{ width: 100, height: 100, transform: [{ rotateY: '180deg' }] }}
                    source={{ uri: item.image }} />
                <View style={{ flex: 1, paddingLeft: 15, paddingRight: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: COLORS.dark }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold' }}>Size: <Text style={{ fontWeight: 'normal' }}>{item.size}</Text>
                        </Text>
                        <Text style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold', paddingLeft: 10 }}>Color:</Text>
                        <View
                            style={{ marginLeft: 10 }}>
                            <View style={{ width: 18, height: 18, backgroundColor: item.color, borderRadius: 30, margin: 2 }} />
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: COLORS.dark, paddingTop: 8 }}>{`$${item.price}`}</Text>
                </View>
                <View style={{ alignItems: 'center', paddingRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => { handleDecreQuantity(index, item.quantity) }}
                        style={{ padding: 3 }}><Image
                            style={{ width: 20, height: 20, backgroundColor: COLORS.bcground, borderRadius: 5 }}
                            source={ICONS.iconMinus} /></TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark, paddingVertical: 5 }}>{item.quantity}</Text>
                    <TouchableOpacity
                        onPress={() => { handleIncreQuantity(index) }}
                        style={{ padding: 3 }}><Image
                            style={{ width: 20, height: 20, backgroundColor: COLORS.dark, borderRadius: 5, tintColor: COLORS.white }}
                            source={ICONS.iconAdd} /></TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: COLORS.dark, paddingBottom: 15, paddingLeft: 15, marginTop: -10 }}>My Cart</Text>
            <View style={{ flex: 1, padding: 15 }}>
                {(myCartData.length === 0) ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: '500', color: COLORS.dark, opacity: 0.6 }}>Giỏ hàng chưa có sản phẩm nào</Text>
                    </View>
                    :
                    <SwipeListView
                        data={myCartData}
                        renderItem={(data, rowMap) => <ItemCart item={data.item} index={data.index} />
                        }
                        renderHiddenItem={(data, rowMap) => {
                            const index = data.index
                            return <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { handleDeleteOrderItem(index) }}
                                style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: COLORS.dark, height: 100, borderRadius: 10, width: '50%', alignSelf: 'flex-end', paddingRight: 13, opacity: 0.9 }}>
                                <Image
                                    style={{ width: 32, height: 32, tintColor: COLORS.redLike, opacity: 0.8 }}
                                    source={ICONS.iconDelete} />
                            </TouchableOpacity>
                        }}
                        rightOpenValue={-60}
                    />
                }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>Total</Text>
                <Text style={{ fontSize: 24, fontWeight: '500', color: COLORS.dark }}>{`$${totalPay}`}</Text>
            </View>
            <TouchableOpacity
                onPress={handleCheckout}
                style={{ marginBottom: SIZES.height(11), marginHorizontal: 15, backgroundColor: COLORS.dark, paddingVertical: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>Proceed to checkout</Text>
            </TouchableOpacity>
        </View>
    )
})
