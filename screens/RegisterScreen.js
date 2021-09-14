import React, {useLayoutEffect,useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import {auth} from "../firebaseConfig";

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Login",
        });
    },[navigation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Register",
            headerStyle:{backgroundColor:"dodgerblue"},
            headerTitleStyle:{color:"white", textAlign:'center', marginLeft: -30},
            headerTintColor: "white",
        });
    });

    const signUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        })
    }).catch((error) => alert(error.message));
    };
   
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="dark" />
            <Image source={{uri: "https://p.kindpng.com/picc/s/34-349854_whatsapp-chat-icon-hd-png-download.png"}} style={{ width:300, height:300,}}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)}/>
                <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)}/>
                <Input placeholder="Profile Picture URL (optional)" type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={signUp}/>
            </View>
            <Button containerStyle={styles.button} onPress={signUp} title="Register" />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:-35,
    },
    inputContainer:{
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
    },
    button:{
        marginTop:5,
        width: 200,
    },
})
