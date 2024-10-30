import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App({ navigation }) {
  return (
    <ImageBackground source={require('../Img/fondo2.jpg')} resizeMode="cover" style={styles.fondo}>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Separator />
          <Image style={styles.imgb} source={require('../Img/bienvenidos.png')} />
          
          <Text style={styles.texta}></Text>
          <Separator />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Ventas")}>
          <Image style={styles.image1} source={require('../Img/Carrito.png')} />
          <Separator />
          <Text style={styles.text1}>Comprar Producto</Text>
          </TouchableOpacity>

            <Separator />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("quienessomos")}>
              <Image style={styles.image1} source={require('../Img/info.png')} />
              <Separator />
              <Text style={styles.text1}>Información</Text>
            </TouchableOpacity>
          <Separator />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Registro")}>
          <Image style={styles.image1} source={require('../Img/usuario.png')} />
          <Separator />
          <Text style={styles.text1}>Registro</Text>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Datos")}>
          <Image style={styles.image1} source={require('../Img/Datos.png')} />
          <Separator />
          <Text style={styles.text1}>Mi Información</Text>
          </TouchableOpacity>
          <Image style={styles.imgb} source={require('../Img/SmartLogo.png')}/>

        </View>
      </ScrollView>
      
    </SafeAreaView >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texta: {
    fontSize: 28,
  },
  img: {
    height: 130,
    width: 130,
  },
  imgd: {
    height: 100,
    width: 250,
  },
  imgi: {
    top: 10,
    height: 80,
    width: 80,
    alignContent: 'center',
  },
  imgb: {
    top: 20,
    height: 90,
    width: 350,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: "100%",
  },

  text: {
    fontSize: 18,
    color: 'white', 
    textAlign: 'center'   
  },
  buttonContainer:{
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    flexDirection:'row',
    marginBottom: 5,
    padding: 25,
    height: 85,
    width: "85%",
  },
  image1:{
    borderRadius:25,
    height: 45,
    width: 45,
  },
  text1:{
    fontWeight:'bold',
    marginStarting:8,
    textAlign:'center'
  },
});
