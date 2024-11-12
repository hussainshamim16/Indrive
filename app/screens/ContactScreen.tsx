// ContactScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Contact Us</Text>
      <Button title="Send Message" onPress={() => navigation.navigate('Home')} />
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

export default ContactScreen;
