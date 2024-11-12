// PaymentPageScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentPageScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Payment Page</Text>
      <Button title="Proceed to Payment" onPress={() => navigation.navigate('RideConfirmation')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default PaymentPageScreen;
