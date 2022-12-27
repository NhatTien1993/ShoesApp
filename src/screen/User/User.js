import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function User() {
    return (
        <View>
            <TouchableOpacity>
                <Text>Cập nhật profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Đổi mật khẩu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    )
}