import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Crop as Drop, Banana, Salad, Beef, Croissant, Wine } from 'lucide-react-native';
import { Category } from '@/constants/Products';
import Colors from '@/constants/Colors';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/category/${category.id}`);
  };

  const renderIcon = () => {
    const iconProps = { size: 24, color: Colors.primary };
    
    switch (category.icon) {
      case 'drop':
        return <Drop {...iconProps} />;
      case 'banana':
        return <Banana {...iconProps} />;
      case 'salad':
        return <Salad {...iconProps} />;
      case 'beef':
        return <Beef {...iconProps} />;
      case 'croissant':
        return <Croissant {...iconProps} />;
      case 'wine':
        return <Wine {...iconProps} />;
      default:
        return <Drop {...iconProps} />;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: category.color }]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
    color: Colors.black,
  },
});