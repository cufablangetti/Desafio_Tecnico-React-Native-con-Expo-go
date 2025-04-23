import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/constants/Products';
import Colors from '@/constants/Colors';

export default function OffersScreen() {
  const offerProducts = products.filter(product => product.inOffer);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ofertas" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} 
            style={styles.bannerImage}
            resizeMode="cover" 
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Grandes Descuentos</Text>
            <Text style={styles.bannerSubtitle}>Hasta 20% en productos seleccionados</Text>
          </View>
        </View>
        
        <View style={styles.offerSection}>
          <Text style={styles.sectionTitle}>Ofertas Actuales</Text>
          
          <View style={styles.productsGrid}>
            {offerProducts.map((product, index) => (
              <View key={product.id} style={[
                styles.productWrapper,
                index % 2 === 0 ? { paddingRight: 8 } : { paddingLeft: 8 }
              ]}>
                <ProductCard product={product} />
              </View>
            ))}
          </View>

          {offerProducts.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No hay ofertas disponibles en este momento</Text>
            </View>
          )}
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
  bannerContainer: {
    height: 180,
    marginBottom: 16,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
  },
  bannerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: Colors.white,
  },
  bannerSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.white,
  },
  offerSection: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginBottom: 16,
    color: Colors.black,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productWrapper: {
    width: '50%',
    marginBottom: 16,
  },
  emptyState: {
    padding: 24,
    alignItems: 'center',
  },
  emptyStateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
  },
});