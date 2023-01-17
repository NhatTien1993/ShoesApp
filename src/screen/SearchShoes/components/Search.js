import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Keyboard, Platform,LogBox } from 'react-native'
import React, { memo } from 'react'
import { searchShoes, forusSearch, blurSearch } from '../../../redux/ReduxSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ICONS } from '../../../common/Constant'
import Utils from '../../../../app/Utils'

const Search = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.redux.search)
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);
    return (
        <View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', paddingTop: 10, paddingLeft: 20 }}>{'Find Your\nDream Shoes'}</Text>
            <View style={{
                flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between', alignItems: 'center', marginVertical: 10
            }}>
                <TextInput
                    onChangeText={(text) => dispatch(searchShoes(text))}
                    onFocus={() => dispatch(forusSearch())} //set redux state isSearch= true
                    onBlur={() => dispatch(blurSearch())}
                    value={searchValue}
                    style={{
                        backgroundColor: 'white', paddingVertical: 8, fontSize: 16, flex: 1, marginRight: 10,
                        paddingRight: 5, paddingLeft: 45, borderRadius: 8
                    }}
                    placeholder='Search Shoes...' />
                <TouchableOpacity
                    onPress={() => { Utils.showToast('Xin lỗi! Chức năng chưa phát triển.', ICONS.iconUpdate, 2000, 'error') }}
                    style={{
                        padding: 8, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
                        borderRadius: 8
                    }}>
                    <Image
                        resizeMode='cover'
                        style={styles.icon}
                        source={ICONS.iconMenu} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    dispatch(blurSearch())
                    Keyboard.dismiss()
                }}
                style={{ position: 'absolute', bottom: Platform.OS === 'ios'? 12 : 16, left: 18 }}>
                <Image
                    style={{
                        width: 30,
                        height: 30,
                    }}
                    source={ICONS.iconSearch} />
            </TouchableOpacity>
        </View>
    )
}

export default memo(Search)

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    }
})