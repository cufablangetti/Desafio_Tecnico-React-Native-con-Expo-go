import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ShoppingBag } from 'lucide-react-native';
import { Product } from '@/constants/Products';
import { useCart } from '@/context/CartContext';
import Colors from '@/constants/Colors';

interface ProductCardProps {
  product: Product;
  horizontal?: boolean;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 columns with padding

export default function ProductCard({ product, horizontal = false }: ProductCardProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  
  const discountedPrice = product.inOffer && product.discount 
    ? product.price * (1 - product.discount / 100) 
    : null;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handlePress = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        horizontal ? styles.horizontalContainer : styles.verticalContainer
      ]} 
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Image 
        source={{ uri: product.image }} 
        style={horizontal ? styles.horizontalImage : styles.image} 
        resizeMode="cover" 
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <View style={styles.priceRow}>
          <View>
            {discountedPrice ? (
              <>
                <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text>
                <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>
              </>
            ) : (
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            )}
          </View>
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={handleAddToCart}
            activeOpacity={0.7}
          >
            <ShoppingBag size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        {product.inOffer && product.discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{product.discount}% OFF</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  verticalContainer: {
    width: cardWidth,
    marginBottom: 16,
  },
  horizontalContainer: {
    width: 300,
    marginRight: 16,
  },
  image: {
    height: 150,
    width: '100%',
  },
  horizontalImage: {
    height: 120,
    width: '100%',
  },
  contentContainer: {
    padding: 12,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginBottom: 6,
    color: Colors.black,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.primary,
  },
  originalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.gray,
    textDecorationLine: 'line-through',
  },
  addButton: {
    backgroundColor: Colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
  },
  discountText: {
    color: Colors.white,
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  }
});