import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function About() {
   return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
        </View>
   );
 }

 const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '700'
    }
})