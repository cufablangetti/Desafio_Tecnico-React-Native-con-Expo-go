import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MapPin } from 'lucide-react-native';
import * as Location from 'expo-location';
import Header from '@/components/Header';
import StoreCard from '@/components/StoreCard';
import { stores } from '@/constants/Products';
import Colors from '@/constants/Colors';

export default function StoresScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const requestLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      setErrorMsg('Se requiere permiso para acceder a la ubicación');
      setLoading(false);
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMsg('No se pudo obtener la ubicación');
    } finally {
      setLoading(false);
    }
  };

  const handleStorePress = (storeId: string) => {
    // Handle store selection, e.g., navigate to store detail
    console.log(`Store selected: ${storeId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Encontrar Tiendas" />

      <View style={styles.locationContainer}>
        {location ? (
          <Text style={styles.locationText}>
            <MapPin size={16} color={Colors.primary} /> Usando tu ubicación actual
          </Text>
        ) : (
          <TouchableOpacity 
            style={styles.locationButton} 
            onPress={requestLocation}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color={Colors.white} />
            ) : (
              <>
                <MapPin size={16} color={Colors.white} />
                <Text style={styles.locationButtonText}>Usar mi ubicación</Text>
              </>
            )}
          </TouchableOpacity>
        )}
        
        {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
      </View>

      <FlatList
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StoreCard store={item} onPress={handleStorePress} />
        )}
        contentContainerStyle={styles.storesList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  locationContainer: {
    padding: 16,
    alignItems: 'center',
  },
  locationButton: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  locationButtonText: {
    color: Colors.white,
    marginLeft: 8,
    fontFamily: 'Poppins-Medium',
  },
  locationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.black,
    alignItems: 'center',
  },
  errorText: {
    color: Colors.error,
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
  },
  storesList: {
    paddingHorizontal: 16,
  },
});