import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React,{memo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRelateShoes } from '../../../redux/ReduxSlice'
import { ICONS, COLORS, STYLES,SIZES } from '../../../common/Constant'


export default memo(function Menu() {
    const shoesData = useSelector((state) => state.redux.shoesData)
    const categorySelected = useSelector((state) => state.redux.categorySelected)
    
    const dispatch = useDispatch()
    const getRelateShoes = (products)=>{
        dispatch(setRelateShoes(products))  
    }
    
       
   
    const renderItemShoes = ({ item }) => {
        // console.log(item.name)
        return (
            <View
                onMoveShouldSetResponder={() => { getRelateShoes(item.relatedProducts) }}
                style={{
                    backgroundColor: 'white', width:SIZES.width(70), padding: 10, borderRadius: 15, marginVertical: 20, marginHorizontal: 15, ...STYLES.shadow
                }}>
                <TouchableOpacity
                    style={{ width: 50, alignSelf: 'flex-end', justifyContent: 'flex-start', padding: 20, marginTop: -10 }}
                    onPress={() => { console.log('like') }} >
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: '#ccc',

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
            </View>
        )
    }
    console.log(SIZES.width(10))
    return (
        <View>
            <FlatList
                horizontal={true}
                renderItem={renderItemShoes}
                data={shoesData} />
        </View>
    )
})