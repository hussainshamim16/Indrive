import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000); // Show Splash Screen for 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Roboto',
  },
});

export default SplashScreen;
