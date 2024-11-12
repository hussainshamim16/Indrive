// TransportSelectionScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TransportSelectionScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Select Your Transport</Text>
      <Button title="Car" onPress={() => navigation.navigate('BookingProcess')} />
      <Button title="Bike" onPress={() => navigation.navigate('BookingProcess')} />
      <Button title="Taxi" onPress={() => navigation.navigate('BookingProcess')} />
      <Button title="Auto" onPress={() => navigation.navigate('BookingProcess')} />
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

export default TransportSelectionScreen;
