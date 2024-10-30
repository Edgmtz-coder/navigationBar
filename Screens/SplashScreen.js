import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        //Elimina splahs screen del stack
        navigation.replace('Login');

}, 2000);



return (
    <View style={styles.container}>
        <Text>BIENVENIDO!</Text>
        <Image
            style={{ width: "70%", height: "30%" }}
            source={{ uri: "https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" }}
            alt="GIF divertido"
        />
    </View>
);

};

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center', 
        margin:25,
    }
});
