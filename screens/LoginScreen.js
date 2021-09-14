import React, {useEffect,useState, useLayoutEffect} from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { auth } from "../firebaseConfig";


const LoginScreen = ({ navigation }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   useLayoutEffect(() => {
    navigation.setOptions({
        title: "Login",
        headerStyle:{backgroundColor:"#0b3c6e"},
        headerTitleStyle:{color:"white", textAlign:'center'},
        headerTintColor: "white",
    });
});

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
        console.log(authUser)
        if(authUser) {
            navigation.replace("Home");
        }
    });
    return unsubscribe;
   },[])
   const signIn = () => {
         auth.signInWithEmailAndPassword(email,password).catch((error) => alert(error))
   }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="dark" />
            <Image source={{uri: "https://www.logolynx.com/images/logolynx/bc/bc9990c8f56711192cc0adbbd0ccc81e.png"}} style={styles.imageContainer}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={signIn}/>
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
        </KeyboardAvoidingView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: "center",
        backgroundColor:"#f6f6f6",
        justifyContent:'center',
        marginTop:-50,
    },
    inputContainer : {
        width: '100%',
        paddingRight:10,
        paddingLeft:10,
    },
    button:{
        width: 200,
        marginTop:10,
        tintColor: "green",
    },
    imageContainer:{
        width:300,
        height:300,
    },
});