import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})