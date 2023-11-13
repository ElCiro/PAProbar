import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,ImageBackground } from 'react-native';



export default function RegisterScreen (props){
  const {navigation}=props;

  const GotoLoginScreen=()=>{
    navigation.navigate("Login");
  }  



    return (
      <ImageBackground
        source={require('./assets/fondo.jpg')} 
        style={styles.backgroundImage}
      >
      <View style={styles.container}>
        <Text style={styles.headerText}>REGISTRARSE</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electronico"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="white"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repite tu contraseña"
          placeholderTextColor="white"
          secureTextEntry
        />
        <TouchableOpacity style={styles.RegisterButton}>
          <Text style={styles.RegisterButtonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // Llama a la función de manejo cuando se presiona el botón
        onPress={GotoLoginScreen}>
          <Text s>Ya tienes cuenta? Inicia sesion ahora</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 1, // Añadimos la línea de subrayado
    borderBottomColor: 'green', // Color de la línea de subrayado
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  RegisterButton: {
    backgroundColor: 'white',
    borderRadius: 29,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  RegisterButtonText: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
});



