import React from "react";
import { View, Image, Text, StyleSheet, StatusBar, TouchableOpacity, Button } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput } from "react-native-paper";
const Login = () => {
    return (
        <View>
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.container1}>
                    <Text style={styles.font}>Password Recovery</Text></View>
            </View>
            {/* <View style={styles.box}> */}
                <Text style={styles.pass}>New Password</Text>
                <TextInput style={styles.ptext} placeholder="***************"/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container1: {
        height: 234,
        backgroundColor: '#023535',
        borderBottomRightRadius: 150,
        width: 350

    },
    font: {
        fontSize: 40,
        color: '#FFFFFF',
        width: 241,
        height: 110,
        top: 62,
        left: 54,

    },
    box:{
        width: 372,
        //top: 371,
        left: 25,
        border: 1,
    },
    ptext: {
        //width: 111,
        height: 21,
        top: 330,
        left: 25,
        fontsize: 15,
        lineheight: 23,
        letterspacing: 0,
        textalign: 'left',
       backgroundColor: '#B8B8B8',
        
    },
    pass: {
        width: 111,
        height: 21,
        top: 329,
        left: 25,
        fontfamily: 'Poppins',
        fontsize: 15,
        lineheight: 23,
        letterspacing: 0,
        textalign: 'left',
        background: '#000000'

    }
})
export default Login;