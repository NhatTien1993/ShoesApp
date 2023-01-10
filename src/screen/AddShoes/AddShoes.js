import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { getSignIn } from '../../redux/ReduxThunk'
import { useDispatch } from 'react-redux'

const AddShoes = () => {
  const dispatch=useDispatch()
  return (
    <TouchableOpacity 
    onPress={()=>{dispatch(getSignIn())}}
    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Chức năng AddShoes đang phát triển</Text>
    </TouchableOpacity>
  )
}

export default AddShoes