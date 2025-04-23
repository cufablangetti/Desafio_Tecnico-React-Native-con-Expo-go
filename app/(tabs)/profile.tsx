import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView, Switch, Image, Alert } from 'react-native';
import { User, Settings, Bell, LogOut, ChevronRight } from 'lucide-react-native';
import Header from '@/components/Header';
import Colors from '@/constants/Colors';

export default function ProfileScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogin = () => {
    // Normally this would show a login form
    // For this example, we'll just toggle the login state
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Cerrar Sesión",
          onPress: () => setIsLoggedIn(false),
          style: "destructive"
        }
      ]
    );
  };

  const toggleSwitch = (setting: string) => {
    if (setting === 'notifications') {
      setNotificationsEnabled(previousState => !previousState);
    } else if (setting === 'darkMode') {
      setDarkModeEnabled(previousState => !previousState);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mi Perfil" showCartIcon={true} />
      
      <ScrollView style={styles.scrollView}>
        {isLoggedIn ? (
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Juan Pérez</Text>
            <Text style={styles.profileEmail}>juan.perez@example.com</Text>
          </View>
        ) : (
          <View style={styles.loginContainer}>
            <User size={60} color={Colors.primary} />
            <Text style={styles.loginTitle}>Iniciar Sesión</Text>
            <Text style={styles.loginSubtitle}>Inicia sesión para acceder a todas las funciones</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Configuración</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Bell size={20} color={Colors.darkGray} />
              <Text style={styles.settingText}>Notificaciones</Text>
            </View>
            <Switch
              trackColor={{ false: Colors.lightGray, true: Colors.primaryLight }}
              thumbColor={notificationsEnabled ? Colors.primary : Colors.gray}
              onValueChange={() => toggleSwitch('notifications')}
              value={notificationsEnabled}
            />
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Settings size={20} color={Colors.darkGray} />
              <Text style={styles.settingText}>Modo Oscuro</Text>
            </View>
            <Switch
              trackColor={{ false: Colors.lightGray, true: Colors.primaryLight }}
              thumbColor={darkModeEnabled ? Colors.primary : Colors.gray}
              onValueChange={() => toggleSwitch('darkMode')}
              value={darkModeEnabled}
            />
          </View>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Settings size={20} color={Colors.darkGray} />
              <Text style={styles.settingText}>Privacidad</Text>
            </View>
            <ChevronRight size={20} color={Colors.darkGray} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Settings size={20} color={Colors.darkGray} />
              <Text style={styles.settingText}>Ayuda y Soporte</Text>
            </View>
            <ChevronRight size={20} color={Colors.darkGray} />
          </TouchableOpacity>
          
          {isLoggedIn && (
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <LogOut size={20} color={Colors.error} />
              <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
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
  loginContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    margin: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  loginTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.black,
    marginTop: 16,
  },
  loginSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.white,
  },
  profileContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    margin: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.black,
    marginTop: 16,
  },
  profileEmail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.gray,
  },
  settingsContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingsTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.black,
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.black,
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingVertical: 12,
  },
  logoutText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.error,
    marginLeft: 12,
  },
});