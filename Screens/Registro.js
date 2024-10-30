import React, { useState } from 'react';
import { SafeAreaView,ImageBackground, ScrollView,StyleSheet, Button, Image, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../credenciales';
const auth = getAuth(appFirebase)
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};


export default function Login({navigation},props) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()    

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
      Alert.alert('Usuario ya creado' )
    })
  } 

  return (
    <ImageBackground source={require('../Img/trakas.jpg')} resizeMode="cover" style={styles.fondo}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../Img/SmartLogo.png')}
              style={styles.headerImg}
              alt='Logo' />
            <Text style={styles.title}>Registrarse en Smartlock</Text>
            <Text style={styles.subtitle}>Tu seguridad al alcance de tu bolsillo</Text>
          </View>
          <View style={styles.form}>
          <Text style={styles.inputLabel}>Correo electronico</Text>
            <View style={styles.cajatexto}>
              
              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput  placeholder='@gmail' style={{ paddingHorizontal: 15 }}
                  onChangeText={(text) => setEmail(text)} 
                  keyboardType='email-address'/>
            </View>
            <Text style={styles.inputLabel}>Contraseña</Text>
            <View style={styles.cajatexto}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput placeholder='Contraseña' style={{ paddingHorizontal: 15 }}
                  onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
            </View>          


            <View style={styles.formAction}>
            <Button
                title='Crear'
                onPress={CreateAccount}/>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flex: 1,
    
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
      
  cajatexto: {
    paddingVertical:5,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical:5,
},
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 220,
    height: 150,
    alignSelf: 'center',
    marginBottom: 5,
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
  input: {
    marginBottom: 16,
  },

  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,

  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
  },
});