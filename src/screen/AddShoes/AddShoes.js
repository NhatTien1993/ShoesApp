import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

const AddShoes = () => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Chức năng AddShoes đang phát triển</Text>
    </TouchableOpacity>
  )
}

export default AddShoes