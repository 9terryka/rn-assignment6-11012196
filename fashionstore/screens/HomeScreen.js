import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const products = [
  { id: '1', name: 'Office Wear', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamarei', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress4.png') },
  { id: '5', name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress7.png') },
];

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Our Story</Text>
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
});

export default HomeScreen;
