// BookingProcessScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookingProcessScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Booking Process</Text>
      <Button title="Proceed" onPress={() => navigation.navigate('RideDetails')} />
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

export default BookingProcessScreen;
