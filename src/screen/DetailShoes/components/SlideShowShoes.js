import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { COLORS, ICONS, SIZES } from '../../../common/Constant';
import { useState, memo,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductFavorite, likeProduct, unlikeProduct } from '../../../redux/ReduxThunk'

const SlideShow = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const dispatch = useDispatch()
    const dataShoesDetail = useSelector((state) => state.redux.detailShoesData)
    const idProductFavorite = useSelector((state) => state.redux.idProductFavorite)
    const like = useSelector((state) => state.redux.isLike)
    const unlike = useSelector((state) => state.redux.isUnLike)
    const data = [
        {
            image: dataShoesDetail.image
        },
        {
            image: dataShoesDetail.image
        },
        {
            image: dataShoesDetail.image
        }
    ]
    useEffect(() => {
        dispatch(getProductFavorite())
    }, [like, unlike])
    const pressLike = (id) => {
        console.log(id)
        const isLike = idProductFavorite.includes(id)
        if (isLike) {
            dispatch(unlikeProduct(id))
        } else {
            dispatch(likeProduct(id))
        }
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -10, flex: 1 }}>
                <Image
                    style={{ width: SIZES.width(70), height: SIZES.height(25), transform: [{ rotateY: '180deg' }] }}
                    source={{ uri: item.image }} />
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
            onPress={()=>{pressLike(dataShoesDetail.id)}}
            style={{width:40,alignSelf:'flex-end',padding:5,marginRight:10}}>
                <Image
                    style={{
                        width: 24, height: 24, tintColor: idProductFavorite.includes(dataShoesDetail.id) ? COLORS.redLike :COLORS.greylight, alignSelf: 'center',
                    }}
                    source={ICONS.icFavorite} />
            </TouchableOpacity>

            <View style={{ marginBottom: -10, flex: 1 }}>
                <Carousel data={data}
                    renderItem={renderItem}
                    sliderWidth={SIZES.width(100)}
                    itemWidth={SIZES.width(100)}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ marginTop: -40 }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: -4,
                        backgroundColor: COLORS.dark
                    }}
                    inactiveDotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: COLORS.greylight
                    }}
                    inactiveDotOpacity={1}
                    inactiveDotScale={1}

                />
            </View>
        </View>
    )
}

export default memo(SlideShow)
