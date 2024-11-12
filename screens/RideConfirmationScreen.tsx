// RideConfirmationScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RideConfirmationScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Your Ride is Confirmed!</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
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

export default RideConfirmationScreen;
