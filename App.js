import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importar pantallas que apenas vamos a crear
import Login from './Screens/Login';
import Menu from './Screens/Menu';
import Registro from './Screens/Registro';
import SplashScreen from './Screens/SplashScreen';
import quinessomos from './Screens/quienessomos';
import Datos from './Screens/Datos';
import Ventas from './Screens/Ventas'


//creamos el arbol de navegaion 
const Stack = createNativeStackNavigator();
<Stack.Screen name="Menu" component={Menu}/>
//Crear un componente de la APP
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Slash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false}}/>
          <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false}}/>
          <Stack.Screen name='quienessomos' component={quinessomos} options={{ headerShown: false}}/>
          <Stack.Screen name='Datos' component={Datos} options={{ headerShown: false}}/>   
          <Stack.Screen name='Ventas' component={Ventas} options={{title: 'Ventas'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
)};

//exportar el componente
export default App;
const styles = StyleSheet.create({
  container: { flex: 1,}
});