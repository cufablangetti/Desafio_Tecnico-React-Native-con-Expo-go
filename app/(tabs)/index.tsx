import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import StoreCard from '@/components/StoreCard';
import { categories, products, stores } from '@/constants/Products';
import Colors from '@/constants/Colors';

const CAROUSEL_INTERVAL = 3000; // 3 seconds
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [activeStoreIndex, setActiveStoreIndex] = useState(0);
  const storeScrollRef = useRef<ScrollView>(null);
  const featuredProducts = products.filter(product => product.inOffer);

  useEffect(() => {
    const interval = setInterval(() => {
      if (storeScrollRef.current) {
        const nextIndex = (activeStoreIndex + 1) % stores.length;
        storeScrollRef.current.scrollTo({
          x: nextIndex * (width - 32),
          animated: true
        });
        setActiveStoreIndex(nextIndex);
      }
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, [activeStoreIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Supermercado" showBackButton={false} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categorías</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.storesSection}>
          <Text style={styles.sectionTitle}>Las Mejores Tiendas</Text>
          <ScrollView
            ref={storeScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const newIndex = Math.round(e.nativeEvent.contentOffset.x / (width - 32));
              setActiveStoreIndex(newIndex);
            }}
            contentContainerStyle={styles.storesContainer}
          >
            {stores.map((store) => (
              <View key={store.id} style={styles.storeWrapper}>
                <StoreCard store={store} onPress={() => {}} />
              </View>
            ))}
          </ScrollView>
          <View style={styles.paginationDots}>
            {stores.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeStoreIndex && styles.activeDot
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.productsSection}>
          <Text style={styles.sectionTitle}>Todos los Productos</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          >
            {products.map((product) => (
              <View key={product.id} style={styles.productWrapper}>
                <ProductCard product={product} />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  categoriesSection: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginHorizontal: 16,
    marginBottom: 12,
    color: Colors.black,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  storesSection: {
    marginBottom: 24,
  },
  storesContainer: {
    paddingHorizontal: 16,
  },
  storeWrapper: {
    width: width - 32,
    paddingRight: 16,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.lightGray,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  productsSection: {
    marginBottom: 24,
  },
  productsContainer: {
    paddingHorizontal: 16,
  },
  productWrapper: {
    width: 200,
    marginRight: 16,
  },
});