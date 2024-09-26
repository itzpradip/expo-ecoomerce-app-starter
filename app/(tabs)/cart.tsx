import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const CartScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})