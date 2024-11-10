import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



const index = () => {
  return (
    <View>
      <Text style={styles.text}>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  // .primary: { color :'#FFCC00'},
  // .background: '#FFFFFF',
  // .text: '#text',

  primary: {
    color: "#ff0000",
  },
  backgound: {
    color: "#FFFFFF",
  },
  text: {
    color: "#000000",
  }

})
  

export default index