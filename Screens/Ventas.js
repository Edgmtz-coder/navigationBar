import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const VentaCerraduraScreen = ({ navigation }) => {
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(2259.99);

  const handleCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const handleComprar = () => {
    // Lógica para realizar la compra
    Alert.alert('Compra realizada con éxito', 'Procesando pedido...' )
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Img/pryect.jpg')} style={styles.imagen} />
      <Text style={styles.titulo}>Cerradura Inteligente</Text>
      <Text style={styles.descripcion}>La cerradura inteligente más segura del mercado</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitulo}>Precio:</Text>
        <Text style={styles.infoTexto}>${precio}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitulo}>Cantidad:</Text>
        <TouchableOpacity onPress={() => handleCantidad(cantidad - 1)}>
          <Text style={styles.infoTexto}>-</Text>
        </TouchableOpacity>
        <Text style={styles.infoTexto}>{cantidad}</Text>
        <TouchableOpacity onPress={() => handleCantidad(cantidad + 1)}>
          <Text style={styles.infoTexto}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.botonComprar} onPress={handleComprar}>
        <Text style={styles.textoComprar}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoTexto: {
    fontSize: 16,
    color: '#666',
  },
  botonComprar: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  textoComprar: {
    fontSize: 16,
    color: '#fff',
  },
});

export default VentaCerraduraScreen;