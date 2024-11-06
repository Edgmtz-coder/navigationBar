import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
  
  
    <View style={styles.container}>
      <Image style={styles.foto} source={require('../Img/Smart.jpg')} />

      <ScrollView>

        <Text style={styles.textt}> {"\n"} {"\n"} {"\n"}  DATOS DE  CERRADURA INTELIGENTE Yaeliiii </Text>

        <Text style={styles.text}>{"\n"} {"\n"} {"\n"} NOMBRE DEL PROPIETARIO O DUEÑO </Text>
        <TextInput style={styles.txt} placeholder='Escribe aqui o rellena' ></TextInput>

        <Text style={styles.text}> {"\n"}  DIRECCION </Text>
        <TextInput style={styles.txt} placeholder='Escribe aqui o rellena'></TextInput>

        <Text style={styles.text}> {"\n"} TIPOS DE ACCESO </Text>
        <TextInput style={styles.txt} placeholder='Escribe aqui O RELLENA '></TextInput>

        <Text style={styles.text}> {"\n"} CODIGOS DE ACCESO </Text>
        <TextInput style={styles.txt} placeholder='Escribe aqui'></TextInput>

        <Text style={styles.text}> {"\n"} HUELLAS REGISTRADAS Y ACTUALIZADAS </Text>
        <Text style={styles.text}> {"\n"} {"\n"} {"\n"}  </Text>


        <Text style={styles.texttt}> {"\n"} SERVICIO AL CLIENTE {"\n"} 7712685800 </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },

  foto:{
    position: 'absolute',
    height: '10%',
    width: "100%",
    resizeMode: 'cover',
    
  },

  textt:{
    fontSize: 37,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold', 
  },

  text:{
    fontSize: 14,
    textAlign: '',
    color: 'white',
    paddingStart:14
  },

  texttt:{
    fontSize: 14,
    textAlign: 'right',
    color: 'white',
    paddingStart:14
  },
  
  caja:{
    flexDirection: 'column',
    height: 90,
    width: 80,
  },

  txt: {
    margin: 10,
    padding: 5,
    borderRadius:10,
    backgroundColor:'white',
    borderColor:"black",
    borderWidth: 2,
    marginTop: 10,
    fontSize: 14,
    color: 'black',
    
    },
});
