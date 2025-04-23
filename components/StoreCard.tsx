import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Star, MapPin } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface StoreProps {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
  distance: string;
}

interface StoreCardProps {
  store: StoreProps;
  onPress: (storeId: string) => void;
}

export default function StoreCard({ store, onPress }: StoreCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(store.id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: store.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{store.name}</Text>
        <View style={styles.ratingContainer}>
          <Star size={16} color={Colors.secondary} fill={Colors.secondary} />
          <Text style={styles.rating}>{store.rating}</Text>
        </View>
        <View style={styles.addressContainer}>
          <MapPin size={14} color={Colors.gray} />
          <Text style={styles.address} numberOfLines={1}>{store.address}</Text>
        </View>
        <View style={styles.distanceContainer}>
          <Text style={styles.distance}>{store.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.black,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.black,
    marginLeft: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  address: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.darkGray,
    marginLeft: 4,
    flex: 1,
  },
  distanceContainer: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  distance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: Colors.darkGray,
  },
});