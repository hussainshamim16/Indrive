// OnboardingScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
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
  title: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Roboto',
    marginBottom: 20,
  },
});

export default OnboardingScreen;
