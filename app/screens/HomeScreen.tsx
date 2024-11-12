import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Car from '@expo/vector-icons/FontAwesome6';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.0978,
          longitude: -59.6182,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: 13.0978, longitude: -59.6182 }}
          title="Your Location"
        />
      </MapView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <ScrollView horizontal style={styles.iconsRow}>
          <Text style={styles.icon}><MaterialIcons name="bike-scooter" size={24} color="black" /></Text>
          <Text style={styles.icon}><AntDesign name="car" size={24} color="black" /></Text>
          <Text style={styles.icon}><FontAwesome6 name="bus-simple" size={24} color="black" /></Text>
        </ScrollView>

        {/* Input Fields */}
        <TextInput style={styles.input} placeholder="To" />
        <TextInput style={styles.input} placeholder="Offer your Fare" />

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find a Driver</Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Menu */}
      <View style={styles.drawer}>
        <Text style={styles.drawerHeader}>Hussain Shamim</Text>
        <Text style={styles.drawerItem}>Request History</Text>
        <Text style={styles.drawerItem}>Couriers</Text>
        <Text style={styles.drawerItem}>City to City</Text>
        <Text style={styles.drawerItem}>Settings</Text>
        <Text style={styles.drawerItem}>Help</Text>
        <Text style={styles.drawerItem}>Support</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  map: {
    flex: 3,
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#000',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  iconsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    color: '#aaff00',
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#aaff00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    width: '70%',
    height: '100%',
    padding: 20,
  },
  drawerHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerItem: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
  },
});
