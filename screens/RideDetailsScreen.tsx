// RideDetailsScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RideDetailsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Ride Details</Text>
      <Button title="Confirm Ride" onPress={() => navigation.navigate('PaymentPage')} />
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

export default RideDetailsScreen;
