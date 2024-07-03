import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

const products = [
  { id: '1', name: 'Office Wear', description: 'Office wear for your office', price: '$120', image: require('../assets/dress1.png') },
  { id: '2', name: 'Lamerei', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('../assets/dress4.png') },
  { id: '3', name: 'Church Wear', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('../assets/dress3.png') },
];

const CheckoutScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Checkout</Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.removeButton}>
            <Icon name="remove" size={24} color="red" />
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontWeight: 'bold',
  },
  productDescription: {
    color: 'gray',
  },
  productPrice: {
    color: 'orange',
  },
  removeButton: {
    padding: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
  checkoutButton: {
    backgroundColor: 'orange',
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
