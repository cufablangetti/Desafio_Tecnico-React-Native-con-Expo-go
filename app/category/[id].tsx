import React from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/constants/Products';
import Colors from '@/constants/Colors';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();
  
  const category = categories.find(c => c.id === id);
  const categoryProducts = products.filter(p => p.category === id);

  if (!category) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Categoría no encontrada" showBackButton />
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Esta categoría no existe o ha sido eliminada.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={category.name} showBackButton />
      
      {categoryProducts.length > 0 ? (
        <FlatList
          data={categoryProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View style={[
              styles.productWrapper,
              index % 2 === 0 ? { paddingRight: 8 } : { paddingLeft: 8 }
            ]}>
              <ProductCard product={item} />
            </View>
          )}
          contentContainerStyle={styles.productsList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay productos disponibles en esta categoría.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  productsList: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  productWrapper: {
    width: '50%',
    marginBottom: 16,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  notFoundText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
  },
});