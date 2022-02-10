import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import React, { useState } from 'react';
// import { ref, onValue, set } from 'firebase/database';
import {firestore as db} from "../firebase";
import { collection, query, getDocs, where, updateDoc, doc, orderBy, onSnapshot, addDoc, Timestamp } from "firebase/firestore"; 


const windowHeight = Dimensions.get('window').height;

export default function ChatBottom() {
   const [text, setText] = useState("");
   const [botMessage, setBotMessage] = useState("")

   const sendMessage = () => {
      fetch(`http://localhost:3001/sendMessage`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({ message: text }),
     })
     .then(async(response)=>{
        response.json().then(async(res) => {
           console.log(res.answer)
         //   storeMessage(res.answer)
         //   console.log(db)
           setBotMessage(res.answer)
           await addDoc(collection(db, "users/"+"91EPyDC71edJYo6ADkMzsGkjinz1"+"/chats"), {
            botAnswer: res.answer,
            userMessage: text,
            timestamp: Timestamp.now()
           })
           setText("");
         })
     })
   }

  return <View style={styles.chat}>
           <View>
              <FontAwesome name="microphone" size={24} color="white" />
           </View>
           <View style={styles.textGroup}>
              <Entypo name="emoji-happy" size={24} color="#53BA4A" />
              <TextInput onChangeText={(val) => setText(val)} value={text} style={styles.textStyle} placeholder="Write Your Query"/>
           </View>
           <View>
              <TouchableOpacity onPress={sendMessage}>
               <Ionicons name="send-sharp" size={24} color="white" />
              </TouchableOpacity>
           </View>
         </View>
}

const styles=StyleSheet.create({
  chat:{
      flex:1,
      flexDirection: "row",
      alignItems:"center",
      width: "100%",
      backgroundColor:"#53BA4A",
      padding:7,
      minHeight: 3/100 * windowHeight
  },
   textGroup:{
      borderWidth: 1,
      borderColor: "black",
      backgroundColor:"#ffffff",
      borderRadius:30,
      flex:1,
      flexDirection: "row",
      padding: 5,
      marginLeft:10,
      marginRight:10
   },
   textStyle:{
      marginLeft:10,
      width:'100%'
   }
})