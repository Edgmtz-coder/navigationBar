import { ImageBackground,ScrollView, StyleSheet, Button, Image, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import React, { Component, useState } from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons';
import appFirebase from "../credenciales"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase)


export default function Login(props, navigation) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    

       const logueo = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Iniciando sesion', "Accediendo...")
            props.navigation.navigate('Menu')
        } catch (error) {
            console.log(error);
            Alert.alert('Usuario no registrado')

        }
    }

    const CreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //console.log('Account created!')
        const user = userCredential.user;
        console.log (user)
        Alert.alert('Cuenta creada exitosamente');
      })
      .catch(error => {
        console.log(error)
        Alert.alert('Ingrese una cuenta valida' )
      })
    }
  

    return (
      <ImageBackground source={require('../Img/trakas.jpg')} resizeMode="cover" style={styles.fondo}>
        <ScrollView>
          <View >
            <View style={styles.container1}>
              <Image source={require('../Img/SmartLogo.png')}
                style={styles.headerImg}
                alt='Logo' />
              <Text style={styles.title}>Iniciar sesión Smartlock</Text>
              <Text style={styles.subtitle}>Tu seguridad al alcance de tu bolsillo</Text>
              <Image
            style={{ width: "40%", height: "35%", resizeMode: 'contain'}}
            source={{ uri: "https://tutmee.ru/wp-content/uploads/2023/07/127978_556458581749495e9cd2220313d58037mv2.gif" }}
            alt="GIF divertido"
        />
            </View>
            
            <View>
              <Text style={styles.inputLabel}>Email address</Text>
              <View style={styles.cajatexto}>
                <TextInput  placeholder='smartlock@gmail' style={{ paddingHorizontal: 15 }}
                  onChangeText={(text) => setEmail(text)} 
                  keyboardType='email-address'/>
              </View>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.cajatexto}>
                <TextInput placeholder='Contraseña' style={{ paddingHorizontal: 15 }}
                  onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
              </View>
              <Text></Text>
              <View style={styles.formAction}>
                <Button
                  title="Iniciar sesón"
                  onPress={logueo}
                />
                <Text></Text>
                <Button
                title='Crear cuenta'
                onPress={CreateAccount}/>
              </View>
              
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

  //  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  padre: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'

  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: "100%",
  },
  headerImg: {
    width: 250,
    height: 200,
    alignSelf: 'center',
    marginBottom: 5,
  },
  container1:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center', 
    margin:10,
    padding: 24,
},

  Lg: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: 'white'
  },
     
  cajatexto: {
      paddingVertical:15,
      backgroundColor: 'white',
      borderRadius: 30,
      marginVertical:5,
  },
  padreBoton: {
      alignItems: 'center'
  },
  cajaBoton: {
      backgroundColor: '#525FE1',
      borderRadius: 30,
      paddingVertical: 20,
      width: 150,
      marginTop: 20,
  },
  TextoBoton: {
      textAlign: 'center',
      color: 'white',
    },


})
