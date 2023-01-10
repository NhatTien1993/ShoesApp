import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { COLORS, SIZES } from '../../common/Constant'

export default function FilterShoes() {
 
  return (
    <View

      style={{ flex: 1, paddingTop: 95, backgroundColor: 'rgba(000,000,000,0.6)' }}>
      <ScrollView
        
        style={{ backgroundColor: COLORS.white, borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1 }}>
        <View style={{ width: 40, borderWidth: 2, borderColor: '#ccc', marginTop: 5, borderRadius: 5, alignSelf: 'center' }} />
        <View style={{ height: SIZES.height(80), justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.dark }}>Chức năng FilterShoes đang phát triển</Text>
        </View>
      </ScrollView>
    </View>
  )
}