# 🛒 Supermercado App

Una aplicación de supermercado moderna construida con React Native y Expo, que permite a los usuarios explorar productos, ver tiendas cercanas y gestionar su carrito de compras.

## 📱 Características

- 🏪 Exploración de tiendas con carrusel automático
- 📦 Categorías de productos
- 🛍️ Lista de productos con ofertas
- 🛒 Carrito de compras funcional
- 📍 Geolocalización de tiendas
- 🎨 Diseño moderno y responsive

## 🚀 Tecnologías

- [Expo](https://expo.dev/) - Framework de React Native
- [Expo Router](https://docs.expo.dev/router/introduction/) - Sistema de navegación
- [React Native](https://reactnative.dev/) - Framework base
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript tipado

## 📋 Prerrequisitos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (v9 o superior)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

## 🛠️ Instalación

1. Descargar el zip.
  - Extraerlo
  - Abrirlo con Visual Studios Code

2. Instala las dependencias:
```bash
npm install
```
```bash
npm install expo
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```
- yo lo hago con este de abajo: 
```bash
npx expo start 
```

4. Abre la aplicación:

- Una vez que inicies la aplicacion te descargas Expo go en tu celular, y escaneas el codigo qr que te sale en la terminal:
   - 📱 iOS/Android: Escanea el código QR con la app Expo Go  


## 📱 Pantallas Principales

### 🏠 Inicio
- Carrusel automático de tiendas destacadas
- Categorías de productos
- Lista horizontal de productos

### 🛒 Carrito
- Lista de productos seleccionados
- Gestión de cantidades
- Resumen de compra

### 👤 Perfil
- Información del usuario
- Historial de compras
- Configuración

## 📦 Gestión de Datos

Los datos se manejan localmente a través de un archivo JSON ubicado en `data/app.json`. La estructura incluye:

- Categorías de productos
- Listado de tiendas
- Productos y ofertas

## Funcionalidades

- En categorias, si seleccionas algunos de los apartados se te dirige a la seccion del mismo.
- En mejores tiendas, se cumple con el carussel automatico y tiene una pantalla con la ubicacion.
- En todos los productos, podes seleccionarlo para ver el detalle y agregarlo al carrito.
- El carrito lo podes seleccionar arriba a la izquierza o abajo en la seccion de carrito. Se puede agregar y eliminar.
- Ademas tiene un apartado de perfil para el usuario o cliente.

## 🎨 Estilos

La aplicación utiliza un sistema de estilos consistente con:

- Colores predefinidos en `constants/Colors.ts`
- Fuentes de Google (Poppins) a través de `@expo-google-fonts`
- StyleSheet para estilos en componentes

## 👥 Autores

- **Facundo Blangetti** - *Trabajo de Preseleccion* 

## 🙏 Agradecimientos

Le queria dar las gracias por esta oportunidad, estoy dispuesto a aprender y aportar en lo que sea. Muchas cosas las voy aprediendo gracias a estos desafios. 

Quedo atento a su respuesta.