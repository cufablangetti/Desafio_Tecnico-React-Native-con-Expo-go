export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  inOffer?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Lácteos',
    icon: 'drop',
    color: '#D4E6F1',
  },
  {
    id: '2',
    name: 'Frutas',
    icon: 'banana',
    color: '#FADBD8',
  },
  {
    id: '3',
    name: 'Verduras',
    icon: 'salad',
    color: '#D5F5E3',
  },
  {
    id: '4',
    name: 'Carnes',
    icon: 'beef',
    color: '#F5EEF8',
  },
  {
    id: '5',
    name: 'Panadería',
    icon: 'croissant',
    color: '#FCF3CF',
  },
  {
    id: '6',
    name: 'Bebidas',
    icon: 'wine',
    color: '#F9E79F',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Leche Entera',
    description: 'Leche entera pasteurizada de alta calidad, 1 litro',
    price: 1.20,
    image: 'https://images.pexels.com/photos/2419278/pexels-photo-2419278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '1',
    inOffer: true,
    discount: 10,
  },
  {
    id: '2',
    name: 'Yogurt Natural',
    description: 'Yogurt natural sin azúcar, pack de 4 unidades',
    price: 2.50,
    image: 'https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '1',
  },
  {
    id: '3',
    name: 'Queso Fresco',
    description: 'Queso fresco suave y cremoso, 250g',
    price: 3.75,
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '1',
    inOffer: true,
    discount: 15,
  },
  {
    id: '4',
    name: 'Manzanas',
    description: 'Manzanas rojas frescas, pack de 1kg',
    price: 2.20,
    image: 'https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '2',
  },
  {
    id: '5',
    name: 'Plátanos',
    description: 'Plátanos amarillos maduros, pack de 5 unidades',
    price: 1.80,
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '2',
    inOffer: true,
    discount: 20,
  },
  {
    id: '6',
    name: 'Fresa',
    description: 'Fresas frescas, caja de 250g',
    price: 3.50,
    image: 'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '2',
  },
  {
    id: '7',
    name: 'Lechuga',
    description: 'Lechuga romana fresca, 1 unidad',
    price: 1.30,
    image: 'https://images.pexels.com/photos/2983819/pexels-photo-2983819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '3',
  },
  {
    id: '8',
    name: 'Tomates',
    description: 'Tomates maduros, pack de 500g',
    price: 1.90,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '3',
    inOffer: true,
    discount: 5,
  },
  {
    id: '9',
    name: 'Zanahorias',
    description: 'Zanahorias frescas, pack de 500g',
    price: 1.40,
    image: 'https://images.pexels.com/photos/54082/carrots-vegetables-food-orange-54082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '3',
  },
  {
    id: '10',
    name: 'Filete de Res',
    description: 'Filete de res premium, 300g',
    price: 7.50,
    image: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '4',
  },
  {
    id: '11',
    name: 'Pechuga de Pollo',
    description: 'Pechuga de pollo sin hueso, 500g',
    price: 4.80,
    image: 'https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '4',
    inOffer: true,
    discount: 12,
  },
  {
    id: '12',
    name: 'Chuletas de Cerdo',
    description: 'Chuletas de cerdo frescas, pack de 4 unidades',
    price: 5.20,
    image: 'https://images.pexels.com/photos/8308076/pexels-photo-8308076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '4',
  },
];

export const stores = [
  {
    id: '1',
    name: 'Supermercado Central',
    address: 'Calle Principal #123',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
    distance: '1.2 km',
    coordinates: {
      latitude: 40.416775,
      longitude: -3.703790,
    }
  },
  {
    id: '2',
    name: 'Mercado Familiar',
    address: 'Av. del Sol #456',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.2,
    distance: '2.5 km',
    coordinates: {
      latitude: 40.419198,
      longitude: -3.700156,
    }
  },
  {
    id: '3',
    name: 'Super Express',
    address: 'Plaza Mayor #789',
    image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    distance: '0.8 km',
    coordinates: {
      latitude: 40.413831,
      longitude: -3.707799,
    }
  },
  {
    id: '4',
    name: 'Mercado Fresco',
    address: 'Calle Nueva #321',
    image: 'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.0,
    distance: '3.1 km',
    coordinates: {
      latitude: 40.422371,
      longitude: -3.695308,
    }
  },
];