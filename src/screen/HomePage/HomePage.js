
import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { memo } from 'react'
import AppBar from './components/AppBar'
import Menu from './components/Menu'
import ListShoes from './components/ListShoes'
import RelateShoes from './components/RelateShoes'
import { SIZES } from '../../common/Constant'
import { getStorage, saveStorage, removeStorage } from '../../common/LocalStorage'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOrderList } from '../../redux/ReduxSlice'

export default memo(function HomePage() {
  const dispatch = useDispatch()
  const orderListShoes = useSelector((state) => state.redux.orderList)
  // const accessToken = useSelector((state) => state.redux.accessToken)
  const userProfile = useSelector((state) => state.redux.userProfile)

  useEffect(() => {
    console.log(userProfile)
    if (userProfile.email) {
      getLocalStorage()
    }
  }, [userProfile.email])
  const getLocalStorage = async () => {
    const data = await getStorage(userProfile.email)
    if (data) {
      console.log(data)
      dispatch(addOrderList(data))
    }
    else {
      console.log(`no data`)
      dispatch(addOrderList([]))
      saveStorage(userProfile.email, orderListShoes)
    }
  }
  const resetOderListStorage = () => {
    dispatch(addOrderList([]))
    saveStorage(userProfile.email, orderListShoes)
  }
  console.log('render HomePage')
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'black', width: '100%', height: 250, position: 'absolute', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
      <SafeAreaView style={{ minHeight: SIZES.height(105) }}>
        <AppBar />
        <Menu />
        <ListShoes />
        <RelateShoes />
      </SafeAreaView>
    </ScrollView>
  )
})