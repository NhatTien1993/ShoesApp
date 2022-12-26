import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function User() {
  return (
    <View>
      <TouchableOpacity>
        <Text>Câp nhật profile</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Đổi mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Đăng Xuất</Text>
      </TouchableOpacity>
      <Text>Version 0.1</Text>


    </View>
  )
}