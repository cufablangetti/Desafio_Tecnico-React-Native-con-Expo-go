import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react-native';
import Header from '@/components/Header';
import { useCart } from '@/context/CartContext';
import Colors from '@/constants/Colors';

export default function CartScreen() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      Alert.alert(
        "Pedido Completado",
        "Tu pedido ha sido procesado con éxito. ¡Gracias por tu compra!",
        [
          { 
            text: "Aceptar", 
            onPress: () => {
              clearCart();
              setIsCheckingOut(false);
            } 
          }
        ]
      );
    }, 1500);
  };

  const renderItem = ({ item }) => {
    const discountedPrice = item.product.inOffer && item.product.discount 
      ? item.product.price * (1 - item.product.discount / 100) 
      : item.product.price;
    
    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.product.image }} style={styles.productImage} />
        
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.product.name}</Text>
          
          <View style={styles.priceContainer}>
            {item.product.inOffer && item.product.discount ? (
              <>
                <Text style={styles.originalPrice}>${item.product.price.toFixed(2)}</Text>
                <Text style={styles.productPrice}>${discountedPrice.toFixed(2)}</Text>
              </>
            ) : (
              <Text style={styles.productPrice}>${item.product.price.toFixed(2)}</Text>
            )}
          </View>
          
          <View style={styles.quantityContainer}>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.product.id, item.quantity - 1)}
            >
              <Minus size={16} color={Colors.black} />
            </TouchableOpacity>
            
            <Text style={styles.quantity}>{item.quantity}</Text>
            
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
            >
              <Plus size={16} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.removeButton}
          onPress={() => removeFromCart(item.product.id)}
        >
          <Trash2 size={20} color={Colors.error} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Carrito de Compras" showCartIcon={false} />
      
      {items.length > 0 ? (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.product.id}
            renderItem={renderItem}
            contentContainerStyle={styles.cartList}
          />
          
          <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal:</Text>
              <Text style={styles.summaryValue}>${getTotalPrice().toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Envío:</Text>
              <Text style={styles.summaryValue}>$0.00</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalValue}>${getTotalPrice().toFixed(2)}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.checkoutButton}
              onPress={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <Text style={styles.checkoutButtonText}>Procesando...</Text>
              ) : (
                <>
                  <ShoppingBag size={20} color={Colors.white} />
                  <Text style={styles.checkoutButtonText}>Completar Compra</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <ShoppingBag size={80} color={Colors.lightGray} />
          <Text style={styles.emptyTitle}>Tu carrito está vacío</Text>
          <Text style={styles.emptySubtitle}>Agrega productos para comenzar tu compra</Text>
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
  cartList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  productName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.black,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.primary,
  },
  originalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.gray,
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginHorizontal: 12,
    color: Colors.black,
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  summaryContainer: {
    backgroundColor: Colors.white,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.darkGray,
  },
  summaryValue: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 8,
  },
  totalLabel: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.black,
  },
  totalValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.primary,
  },
  checkoutButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 16,
  },
  checkoutButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.white,
    marginLeft: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.black,
    marginTop: 16,
  },
  emptySubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
    marginTop: 8,
  },
});