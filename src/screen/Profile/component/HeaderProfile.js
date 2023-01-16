import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import { useSelector } from 'react-redux'


export default function HeaderProfile() {
  const profile = useSelector((state) => state.redux.userProfile)

  return (
    <View style={styles.header}>
      <Image
        resizeMode='cover'
        style={styles.header__image} source={{ uri: profile.avatar}} />
    </View>
  )
}