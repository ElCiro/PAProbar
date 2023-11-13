import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen(props){
  const {navigation}=props;
const GotoContactListScreen=()=>{
  navigation.navigate("ContactListScreen");
}
const GotoRegisterScreen=()=>{
  navigation.navigate("Register");
}
const GotoChatScreen=()=>{
  navigation.navigate("ChatScreen");
}
  // Función para abrir la galería cuando se hace clic en el botón
  openImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      // Abre la galería
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        // La imagen ha sido seleccionada, puedes manejarla aquí
        console.log('Imagen seleccionada:', result.uri);
      }
    } else {
      // Permiso denegado para acceder a la galería
      console.log('Permiso denegado para acceder a la galería');
    }
  };
    return (
      <View style={[styles.container, styles.backgroundImage, {backgroundColor: 'violet' }]}>
    <Text style={styles.headerText}>LOGIN<AntDesign name="cloudo" size={40} color="purple" /></Text>
        <TextInput 
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="purple"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="purple"
          secureTextEntry
        />
        <TouchableOpacity
          // Llama a la función de manejo cuando se presiona el botón
        onPress={GotoRegisterScreen}>
          <Text s>Eres nuevo? Registrate ahora</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={GotoContactListScreen} // Llama a la función de manejo cuando se presiona el botón
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        {/* Agregar el botón de navegación a la galería */}
        <TouchableOpacity style={styles.galleryButton} onPress={this.openImagePicker}>
          <Text style={styles.galleryButtonText}>Abrir Galería</Text>
        </TouchableOpacity>
        <Text style={{
          color: "black",
          position: "absolute",
          fontSize: 48,
          fontWeight: "bold"
        }}></Text>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  // Estilos para la imagen de fondo
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute', // Coloca la imagen detrás de otros elementos
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
     // Fondo semitransparente para los campos de entrada
  },
  loginButton: {
    backgroundColor: 'white',
    borderRadius: 29,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Estilos para el botón de galería
  galleryButton: {
    backgroundColor: 'white',
    borderRadius: 29,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  galleryButtonText: {
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
  },
});