import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Minus, Plus, ShoppingBag } from 'lucide-react-native';
import Header from '@/components/Header';
import { products } from '@/constants/Products';
import { useCart } from '@/context/CartContext';
import Colors from '@/constants/Colors';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Producto no encontrado" showBackButton />
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Este producto no existe o ha sido eliminado.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const discountedPrice = product.inOffer && product.discount 
    ? product.price * (1 - product.discount / 100) 
    : null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Detalle de Producto" showBackButton />
      
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        
        {product.inOffer && product.discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{product.discount}% OFF</Text>
          </View>
        )}
        
        <View style={styles.contentContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          
          <View style={styles.priceContainer}>
            {discountedPrice ? (
              <>
                <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text>
                <Text style={styles.productPrice}>${discountedPrice.toFixed(2)}</Text>
              </>
            ) : (
              <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
            )}
          </View>
          
          <Text style={styles.descriptionTitle}>Descripción</Text>
          <Text style={styles.description}>{product.description}</Text>
          
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Cantidad</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={decrementQuantity}
              >
                <Minus size={16} color={Colors.black} />
              </TouchableOpacity>
              
              <Text style={styles.quantity}>{quantity}</Text>
              
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={incrementQuantity}
              >
                <Plus size={16} color={Colors.black} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>
            ${((discountedPrice || product.price) * quantity).toFixed(2)}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <ShoppingBag size={20} color={Colors.white} />
          <Text style={styles.addToCartText}>Agregar al Carrito</Text>
        </TouchableOpacity>
      </View>
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
  productImage: {
    width: '100%',
    height: 300,
  },
  discountTag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  discountText: {
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
  contentContainer: {
    padding: 16,
  },
  productName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.black,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.primary,
  },
  originalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.gray,
    textDecorationLine: 'line-through',
    marginRight: 12,
  },
  descriptionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.black,
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 24,
    lineHeight: 22,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.black,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginHorizontal: 16,
    color: Colors.black,
  },
  footer: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalContainer: {
    flex: 1,
  },
  totalLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.gray,
  },
  totalPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.black,
  },
  addToCartButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addToCartText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.white,
    marginLeft: 8,
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
});