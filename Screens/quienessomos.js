import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button,ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <>

      <SafeAreaView>
      <Image style={styles.foto} source={require('../Img/Smart.jpg')} resizeMode="cover"  />

        <ScrollView>

          <View style={styles.container}>

            <Image style={styles.imgb} source={require('../Img/Quienes.png')} />
            <Text></Text>

            <Text style={styles.texta}>
              En Smart Lock Fomentamos la seguridad
              <Text> y protección del hogar centrados en el diseño</Text>
              <Text> y fabricación del cerrojo, ya que se </Text>
              <Text>distingue por su  tecnología de vanguardia,</Text>
              <Text>garantizando la seguridad de nuestros clientes.</Text>
              <Text>Aqui Estuve Yo Estudiante de 10mo Marvin Holaaaa</Text>
              <Text>La regue aqui vamos denuevo</Text>
            </Text>
            <Text></Text>         
            <Image
            style={styles.img}
            source={require('../Img/gif.gif')}
            alt="GIF divertido"
        />
            <Text></Text>


            <Text></Text>
          </View>

          <Button style={styles.btn1}
            title='Descubrelo'
            onPress={() =>
              navigation.navigate('Menu')
            }
          />

          <View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

  },

  texta: {
    flex: 1,
    fontStyle: 'italic',
    fontSize: 22,
    color: '#FFF',
  },

  foto: {
    position: 'absolute',
    height: '150%',
    width: "100%",
  },

  imgb: {
    height: 50,
    width: 350,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: "100%",
  },

  img: {
    height: 350,
    width: 350,
  },
  Text: {
    margin: 0,
    padding: 8,
    borderRadius: 10,
    borderColor: '#00008b',
    borderWidth: 5,
    marginTop: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '20px',
    color: '#FFF'
  },

  Button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,

  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
  },

});



export default Login;